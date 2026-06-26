"use client";

import { jsPDF } from "jspdf";
import { contentData } from "@/lib/content-data";
import { projectSections } from "@/app/projects";
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
    doc.text(contentData.name, HEADER_TEXT_X, headerY + 5);
    headerY += LINE_HEIGHT + NAME_BOTTOM_GAP;

    doc.setFontSize(BODY_SIZE);
    doc.setFont("helvetica", "normal");
    doc.text(contentData.title, HEADER_TEXT_X, headerY);
    headerY += LINE_HEIGHT;
    doc.text(contentData.location, HEADER_TEXT_X, headerY);
    headerY += LINE_HEIGHT + 2;

    doc.setFontSize(BODY_SIZE);
    doc.textWithLink(
      `Email: ${contentData.email}`,
      HEADER_TEXT_X,
      headerY,
      { url: `mailto:${contentData.email}` }
    );
    headerY += LINE_HEIGHT;
    doc.textWithLink(
      `LinkedIn: ${contentData.linkedinDisplay}`,
      HEADER_TEXT_X,
      headerY,
      { url: contentData.linkedin }
    );
    headerY += LINE_HEIGHT;
    doc.textWithLink(
      `GitHub: ${contentData.githubDisplay}`,
      HEADER_TEXT_X,
      headerY,
      { url: contentData.github }
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
    for (const p of contentData.about.split(/\n\n+/)) {
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
    for (const item of contentData.whatIDo.split(/\n+/)) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
      y = wrapText(doc, item, MARGIN_X, y);
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
    for (const line of contentData.techStack.split(/\n+/)) {
      y = checkPageBreak(doc, y, LINE_HEIGHT);
      y = wrapText(doc, line, MARGIN_X, y);
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
    for (const exp of contentData.experience) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 4);
      doc.setFont("helvetica", "bold");
      doc.text(`${exp.company} - ${exp.role}`, MARGIN_X, y);
      y += LINE_HEIGHT;
      doc.setFont("helvetica", "normal");
      doc.text(exp.period, MARGIN_X, y);
      y += LINE_HEIGHT;
      doc.setFont("helvetica", "normal");
      for (const b of exp.bullets.split(/\n+/)) {
        y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
        y = wrapText(doc, b, MARGIN_X + 2, y);
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
    for (const section of projectSections) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
      doc.setFont("helvetica", "bold");
      doc.text(section.title, MARGIN_X, y);
      y += LINE_HEIGHT + 2;
      doc.setFont("helvetica", "normal");
      for (const proj of section.projects) {
        y = checkPageBreak(doc, y, LINE_HEIGHT * 3);
        doc.setFont("helvetica", "bold");
        doc.text(`${proj.name} - ${proj.role}`, MARGIN_X, y);
        y += LINE_HEIGHT;
        doc.setFont("helvetica", "normal");
        y = wrapText(doc, proj.description, MARGIN_X, y) + 1;
        for (const line of proj.built.split(/\n+/)) {
          y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
          y = wrapText(doc, line, MARGIN_X + 2, y) + 1;
        }
        y = checkPageBreak(doc, y, LINE_HEIGHT * 3);
        y = printBoldLabelText(doc, "Result: ", proj.result, MARGIN_X, y);
        y = checkPageBreak(doc, y, LINE_HEIGHT);
        y = printBoldLabelText(doc, "Stack: ", proj.stack, MARGIN_X, y);
        if (proj.github) {
          y = checkPageBreak(doc, y, LINE_HEIGHT);
          y = printBoldLabelLink(doc, "GitHub: ", proj.github, proj.github, MARGIN_X, y);
        }
        y = checkPageBreak(doc, y, LINE_HEIGHT);
        y = printBoldLabelLink(
          doc,
          "Live: ",
          new URL(proj.liveUrl).hostname,
          proj.liveUrl,
          MARGIN_X,
          y
        );
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
    for (const ed of contentData.education) {
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
    for (const s of contentData.keyStrengths.split(/\n+/)) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
      y = wrapText(doc, s, MARGIN_X, y) + 1;
    }
    y += SECTION_GAP;

    y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
    doc.text(
      `Availability: ${contentData.location}. Reach out via email or LinkedIn.`,
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
