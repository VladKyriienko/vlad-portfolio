"use client";

import { jsPDF } from "jspdf";
import { cvData } from "@/lib/cv-data";
import { withBasePath } from "@/lib/base-path";

const MARGIN_X = 20;
const MARGIN_Y = 16;
const PAGE_W = 210;
const PAGE_H = 297;
const MAX_W = PAGE_W - MARGIN_X * 2;
const LINE_HEIGHT = 5.5;
const SECTION_GAP = 5;
const NAME_SIZE = 20;
const HEADING_SIZE = 11;
const BODY_SIZE = 9;
const NAME_BOTTOM_GAP = 5;
const PHOTO_SIZE = 38;
const PHOTO_X = MARGIN_X;
const PHOTO_Y = MARGIN_Y;
const HEADER_TEXT_X = MARGIN_X + PHOTO_SIZE;

function wrapText(doc: jsPDF, text: string, x: number, y: number): number {
  const lines = doc.splitTextToSize(text, MAX_W);
  doc.text(lines, x, y);
  return y + lines.length * LINE_HEIGHT;
}

function checkPageBreak(doc: jsPDF, y: number, spaceNeeded: number): number {
  if (y + spaceNeeded > PAGE_H - MARGIN_Y) {
    doc.addPage();
    return MARGIN_Y;
  }
  return y;
}

function printBoldLabelText(
  doc: jsPDF,
  label: string,
  text: string,
  x: number,
  y: number
): number {
  doc.setFont("helvetica", "bold");
  doc.text(label, x, y);
  const labelWidth = doc.getTextWidth(label);
  doc.setFont("helvetica", "normal");
  const firstLines = doc.splitTextToSize(text, MAX_W - labelWidth);
  doc.text(firstLines[0], x + labelWidth, y);
  y += LINE_HEIGHT;
  const remainder = text.slice(firstLines[0].length).trimStart();
  if (remainder) {
    return wrapText(doc, remainder, x, y) + 1;
  }
  return y + 1;
}

function printBoldLabelLink(
  doc: jsPDF,
  label: string,
  text: string,
  url: string,
  x: number,
  y: number
): number {
  doc.setFont("helvetica", "bold");
  doc.text(label, x, y);
  const labelWidth = doc.getTextWidth(label);
  doc.setFont("helvetica", "normal");
  doc.textWithLink(text, x + labelWidth, y, { url });
  return y + LINE_HEIGHT;
}

export function DownloadCVButton() {
  const handleDownload = async () => {
    const doc = new jsPDF();
    let y = MARGIN_Y;

    // Load photo for PDF (same origin), preserve aspect ratio
    let photoData: string | null = null;
    let photoW = PHOTO_SIZE;
    let photoH = PHOTO_SIZE;
    try {
      const imgUrl =
        typeof window !== "undefined"
          ? `${window.location.origin}${withBasePath("/photo.jpg")}`
          : "";
      const res = await fetch(imgUrl);
      const blob = await res.blob();
      photoData = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      const img = new Image();
      img.src = photoData;
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Image load failed"));
      });
      const ratio = img.naturalWidth / img.naturalHeight;
      if (ratio > 1) {
        photoH = PHOTO_SIZE / ratio;
      } else {
        photoW = PHOTO_SIZE * ratio;
      }
    } catch {
      // continue without photo
    }

    if (photoData) {
      doc.addImage(photoData, "JPEG", PHOTO_X, PHOTO_Y, photoW, photoH);
    }

    let headerY = MARGIN_Y;
    doc.setFontSize(NAME_SIZE);
    doc.setFont("helvetica", "bold");
    doc.text(cvData.name, HEADER_TEXT_X, headerY + 5);
    headerY += LINE_HEIGHT + NAME_BOTTOM_GAP;

    doc.setFontSize(BODY_SIZE);
    doc.setFont("helvetica", "normal");
    doc.text(cvData.title, HEADER_TEXT_X, headerY);
    headerY += LINE_HEIGHT;
    doc.text(`${cvData.location} | ${cvData.availability}`, HEADER_TEXT_X, headerY);
    headerY += LINE_HEIGHT + 2;

    doc.setFontSize(BODY_SIZE);
    doc.textWithLink(
      `Email: ${cvData.email}`,
      HEADER_TEXT_X,
      headerY,
      { url: `mailto:${cvData.email}` }
    );
    headerY += LINE_HEIGHT;
    doc.textWithLink(
      `LinkedIn: ${cvData.linkedinDisplay}`,
      HEADER_TEXT_X,
      headerY,
      { url: cvData.linkedin }
    );
    headerY += LINE_HEIGHT;
    doc.textWithLink(
      `GitHub: ${cvData.githubDisplay}`,
      HEADER_TEXT_X,
      headerY,
      { url: cvData.github }
    );
    headerY += LINE_HEIGHT + 4;

    y = Math.max(PHOTO_Y + photoH, headerY) + SECTION_GAP;

    // About Me
    y = checkPageBreak(doc, y, 40);
    doc.setFontSize(HEADING_SIZE);
    doc.setFont("helvetica", "bold");
    doc.text("About Me", MARGIN_X, y);
    y += SECTION_GAP;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(BODY_SIZE);
    for (const p of cvData.aboutParagraphs) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
      y = wrapText(doc, p, MARGIN_X, y) - 1;
    }
    y += SECTION_GAP;

    // What I do
    y = checkPageBreak(doc, y, 40);
    doc.setFontSize(HEADING_SIZE);
    doc.setFont("helvetica", "bold");
    doc.text("What I do", MARGIN_X, y);
    y += SECTION_GAP;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(BODY_SIZE);
    for (const item of cvData.whatIDo) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
      y = wrapText(doc, `${item.replace(/ <br\s*\/?>/g, ':')}`, MARGIN_X, y);
    }
    y += SECTION_GAP;

    // Tech Stack
    y = checkPageBreak(doc, y, 50);
    doc.setFontSize(HEADING_SIZE);
    doc.setFont("helvetica", "bold");
    doc.text("Tech Stack", MARGIN_X, y);
    y += SECTION_GAP;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(BODY_SIZE);
    for (const g of cvData.techStackGroups) {
      y = checkPageBreak(doc, y, LINE_HEIGHT);
      doc.text(`${g.label} ${g.value}`, MARGIN_X, y);
      y += LINE_HEIGHT;
    }
    y += SECTION_GAP;

    // Experience
    y = checkPageBreak(doc, y, 60);
    doc.setFontSize(HEADING_SIZE);
    doc.setFont("helvetica", "bold");
    doc.text("Experience", MARGIN_X, y);
    y += SECTION_GAP;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(BODY_SIZE);
    for (const exp of cvData.experience) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 4);
      doc.setFont("helvetica", "bold");
      doc.text(`${exp.company} - ${exp.role}`, MARGIN_X, y);
      y += LINE_HEIGHT;
      doc.setFont("helvetica", "normal");
      doc.text(exp.period, MARGIN_X, y);
      y += LINE_HEIGHT;
      doc.setFont("helvetica", "normal");
      for (const b of exp.bullets) {
        y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
        y = wrapText(doc, `• ${b}`, MARGIN_X + 2, y);
      }
      y += 4;
    }
    y += SECTION_GAP;

    // Projects
    y = checkPageBreak(doc, y, 40);
    doc.setFontSize(HEADING_SIZE);
    doc.setFont("helvetica", "bold");
    doc.text("Projects", MARGIN_X, y);
    y += SECTION_GAP;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(BODY_SIZE);
    for (const section of cvData.projects) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
      doc.setFont("helvetica", "bold");
      doc.text(section.title, MARGIN_X, y);
      y += LINE_HEIGHT + 2;
      doc.setFont("helvetica", "normal");
      for (const proj of section.projects) {
        const role = "role" in proj ? proj.role : undefined;
        const title = role ? `${proj.name} - ${role}` : proj.name;
        y = checkPageBreak(doc, y, LINE_HEIGHT * 3);
        doc.setFont("helvetica", "bold");
        doc.text(title, MARGIN_X, y);
        y += LINE_HEIGHT;
        doc.setFont("helvetica", "normal");
        y = wrapText(doc, proj.description, MARGIN_X, y) + 1;
        if ("bullets" in proj && proj.bullets) {
          for (const b of proj.bullets) {
            y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
            y = wrapText(doc, `• ${b}`, MARGIN_X + 2, y) + 1;
          }
        }
        if ("result" in proj && proj.result) {
          y = checkPageBreak(doc, y, LINE_HEIGHT * 3);
          y = printBoldLabelText(doc, "Result: ", proj.result, MARGIN_X, y);
        }
        y = checkPageBreak(doc, y, LINE_HEIGHT);
        y = printBoldLabelText(doc, "Stack: ", proj.stack, MARGIN_X, y);
        const p = proj as {
          live?: string;
          liveUrl?: string;
          code?: string;
          codeUrl?: string;
        };
        if (p.live) {
          y = checkPageBreak(doc, y, LINE_HEIGHT);
          if (p.liveUrl) {
            y = printBoldLabelLink(doc, "Live: ", p.live, p.liveUrl, MARGIN_X, y);
          } else {
            y = printBoldLabelText(doc, "Live: ", p.live, MARGIN_X, y);
          }
        }
        if (p.code) {
          y = checkPageBreak(doc, y, LINE_HEIGHT);
          if (p.codeUrl) {
            y = printBoldLabelLink(doc, "Code: ", p.code, p.codeUrl, MARGIN_X, y);
          } else {
            y = printBoldLabelText(doc, "Code: ", p.code, MARGIN_X, y);
          }
        }
        y += 4;
      }
    }
    y += SECTION_GAP;

    // Education
    y = checkPageBreak(doc, y, 40);
    doc.setFontSize(HEADING_SIZE);
    doc.setFont("helvetica", "bold");
    doc.text("Education", MARGIN_X, y);
    y += SECTION_GAP;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(BODY_SIZE);
    for (const ed of cvData.education) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 5);
      doc.setFont("helvetica", "bold");
      doc.text(`${ed.name} - ${ed.program}`, MARGIN_X, y);
      y += LINE_HEIGHT;
      doc.setFont("helvetica", "normal");
      doc.text(ed.period, MARGIN_X, y);
      y += LINE_HEIGHT;
      y = wrapText(doc, ed.description, MARGIN_X, y) + 4;
    }
    y += SECTION_GAP;

    // Key Strengths
    y = checkPageBreak(doc, y, 40);
    doc.setFontSize(HEADING_SIZE);
    doc.setFont("helvetica", "bold");
    doc.text("Key Strengths", MARGIN_X, y);
    y += SECTION_GAP;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(BODY_SIZE);
    for (const s of cvData.keyStrengths) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
      y = wrapText(doc, `• ${s}`, MARGIN_X, y) + 1;
    }
    y += SECTION_GAP;

    y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
    doc.text(
      `Availability: ${cvData.availability}. Reach out via email or LinkedIn.`,
      MARGIN_X,
      y
    );

    doc.save("Vladyslav-Kyriienko-CV.pdf");
  };

  return (
    <button
      type="button"
      onClick={() => void handleDownload()}
      className="cursor-pointer rounded-full bg-(--btn-primary-bg) px-5 py-2.5 text-sm font-medium text-(--btn-primary-text) transition hover:bg-(--btn-primary-bg-hover)"
    >
      Download CV
    </button>
  );
}
