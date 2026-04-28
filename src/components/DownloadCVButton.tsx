"use client";

import { jsPDF } from "jspdf";
import { cvData } from "@/lib/cv-data";
import { withBasePath } from "@/lib/base-path";

const MARGIN = 20;
const PAGE_W = 210;
const PAGE_H = 297;
const MAX_W = PAGE_W - MARGIN * 2;
const LINE_HEIGHT = 5.5;
const SECTION_GAP = 6;
const NAME_SIZE = 20;
const HEADING_SIZE = 11;
const BODY_SIZE = 9;
const NAME_BOTTOM_GAP = 5;
const PHOTO_SIZE = 38;
const PHOTO_X = MARGIN;
const PHOTO_Y = MARGIN;
const HEADER_TEXT_X = MARGIN + PHOTO_SIZE + 10;

function wrapText(doc: jsPDF, text: string, x: number, y: number): number {
  const lines = doc.splitTextToSize(text, MAX_W);
  doc.text(lines, x, y);
  return y + lines.length * LINE_HEIGHT;
}

function checkPageBreak(doc: jsPDF, y: number, spaceNeeded: number): number {
  if (y + spaceNeeded > PAGE_H - MARGIN) {
    doc.addPage();
    return MARGIN;
  }
  return y;
}

export function DownloadCVButton() {
  const handleDownload = async () => {
    const doc = new jsPDF();
    let y = MARGIN;

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

    let headerY = MARGIN;
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
    doc.text("About Me", MARGIN, y);
    y += SECTION_GAP;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(BODY_SIZE);
    for (const p of cvData.aboutParagraphs) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 3);
      y = wrapText(doc, p, MARGIN, y) + 2;
    }
    y += SECTION_GAP;

    // What I do
    y = checkPageBreak(doc, y, 40);
    doc.setFontSize(HEADING_SIZE);
    doc.setFont("helvetica", "bold");
    doc.text("What I do", MARGIN, y);
    y += SECTION_GAP;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(BODY_SIZE);
    for (const item of cvData.whatIDo) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
      y = wrapText(doc, `• ${item}`, MARGIN, y) + 1;
    }
    y += SECTION_GAP;

    // Tech Stack
    y = checkPageBreak(doc, y, 50);
    doc.setFontSize(HEADING_SIZE);
    doc.setFont("helvetica", "bold");
    doc.text("Tech Stack", MARGIN, y);
    y += SECTION_GAP;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(BODY_SIZE);
    for (const g of cvData.techStackGroups) {
      y = checkPageBreak(doc, y, LINE_HEIGHT);
      doc.text(`${g.label} ${g.value}`, MARGIN, y);
      y += LINE_HEIGHT;
    }
    y += SECTION_GAP;

    // Experience
    y = checkPageBreak(doc, y, 60);
    doc.setFontSize(HEADING_SIZE);
    doc.setFont("helvetica", "bold");
    doc.text("Experience", MARGIN, y);
    y += SECTION_GAP;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(BODY_SIZE);
    for (const exp of cvData.experience) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 4);
      doc.setFont("helvetica", "bold");
      doc.text(`${exp.company} — ${exp.role}`, MARGIN, y);
      y += LINE_HEIGHT;
      doc.setFont("helvetica", "normal");
      doc.text(exp.period, MARGIN, y);
      y += LINE_HEIGHT;
      doc.setFont("helvetica", "normal");
      for (const b of exp.bullets) {
        y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
        y = wrapText(doc, `• ${b}`, MARGIN + 2, y) + 1;
      }
      y += 4;
    }
    y += SECTION_GAP;

    // Projects
    y = checkPageBreak(doc, y, 40);
    doc.setFontSize(HEADING_SIZE);
    doc.setFont("helvetica", "bold");
    doc.text("Projects", MARGIN, y);
    y += SECTION_GAP;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(BODY_SIZE);
    for (const proj of cvData.projects) {
      const name = (proj as { name: string }).name;
      const role = (proj as { role?: string }).role;
      const title = role ? `${name} — ${role}` : name;
      y = checkPageBreak(doc, y, LINE_HEIGHT * 3);
      doc.setFont("helvetica", "bold");
      doc.text(title, MARGIN, y);
      y += LINE_HEIGHT;
      doc.setFont("helvetica", "normal");
      y = wrapText(doc, proj.description, MARGIN, y) + 1;
      if ("bullets" in proj && proj.bullets) {
        for (const b of proj.bullets) {
          y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
          y = wrapText(doc, `• ${b}`, MARGIN + 2, y) + 1;
        }
      }
      if ("result" in proj && proj.result) {
        y = checkPageBreak(doc, y, LINE_HEIGHT * 3);
        y = wrapText(doc, `Result: ${proj.result}`, MARGIN, y) + 1;
      }
      doc.text(`Stack: ${proj.stack}`, MARGIN, y);
      y += LINE_HEIGHT;
      const p = proj as { live?: string; liveUrl?: string; code?: string; codeUrl?: string };
      if (p.live) {
        if (p.liveUrl) {
          doc.textWithLink(`Live: ${p.live}`, MARGIN, y, { url: p.liveUrl });
        } else {
          doc.text(`Live: ${p.live}`, MARGIN, y);
        }
        y += LINE_HEIGHT;
      }
      if (p.code) {
        if (p.codeUrl) {
          doc.textWithLink(`Code: ${p.code}`, MARGIN, y, { url: p.codeUrl });
        } else {
          doc.text(`Code: ${p.code}`, MARGIN, y);
        }
        y += LINE_HEIGHT;
      }
      y += 4;
    }
    y += SECTION_GAP;

    // Education
    y = checkPageBreak(doc, y, 40);
    doc.setFontSize(HEADING_SIZE);
    doc.setFont("helvetica", "bold");
    doc.text("Education", MARGIN, y);
    y += SECTION_GAP;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(BODY_SIZE);
    for (const ed of cvData.education) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 5);
      doc.setFont("helvetica", "bold");
      doc.text(`${ed.name} — ${ed.program}`, MARGIN, y);
      y += LINE_HEIGHT;
      doc.setFont("helvetica", "normal");
      doc.text(ed.period, MARGIN, y);
      y += LINE_HEIGHT;
      y = wrapText(doc, ed.description, MARGIN, y) + 4;
    }
    y += SECTION_GAP;

    // Key Strengths
    y = checkPageBreak(doc, y, 40);
    doc.setFontSize(HEADING_SIZE);
    doc.setFont("helvetica", "bold");
    doc.text("Key Strengths", MARGIN, y);
    y += SECTION_GAP;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(BODY_SIZE);
    for (const s of cvData.keyStrengths) {
      y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
      y = wrapText(doc, `• ${s}`, MARGIN, y) + 1;
    }
    y += SECTION_GAP;

    y = checkPageBreak(doc, y, LINE_HEIGHT * 2);
    doc.text(
      `Availability: ${cvData.availability}. Reach out via email or LinkedIn.`,
      MARGIN,
      y
    );

    doc.save("Vladyslav-Kyriienko-CV.pdf");
  };

  return (
    <button
      type="button"
      onClick={() => void handleDownload()}
      className="cursor-pointer rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
    >
      Download CV
    </button>
  );
}
