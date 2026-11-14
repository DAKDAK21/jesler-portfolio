"""Builds Jesler's one-page A4 resume (public/resume.pdf) and its preview image (public/resume.jpg).

Edit the text below, then run from the project folder:

    pip install reportlab pypdfium2 pillow
    python tools/resume/make_resume.py

Check that it prints "pages: 1". The site shows public/resume.jpg in the View Resume pop-up.
"""
import sys

out_pdf = sys.argv[1] if len(sys.argv) > 1 else "public/resume.pdf"
out_jpg = sys.argv[2] if len(sys.argv) > 2 else "public/resume.jpg"

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

INK = HexColor("#111111")
GRAY = HexColor("#555b66")
LINK = HexColor("#1d4ed8")
BODY = 9.6
LEAD = 11.7

name_style = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=23, leading=27, alignment=TA_CENTER, textColor=INK)
contact_style = ParagraphStyle("contact", fontName="Helvetica", fontSize=9.4, leading=12.5, alignment=TA_CENTER, textColor=GRAY)
section_style = ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=11.5, leading=14, textColor=INK, spaceBefore=6)
body_style = ParagraphStyle("body", fontName="Helvetica", fontSize=BODY, leading=LEAD, textColor=INK)
left_style = ParagraphStyle("left", parent=body_style, fontName="Helvetica-Bold")
right_style = ParagraphStyle("right", parent=left_style, alignment=TA_RIGHT)
plain_right = ParagraphStyle("plainright", parent=body_style, fontName="Helvetica-Bold", alignment=TA_RIGHT)
sub_style = ParagraphStyle("sub", parent=body_style, fontName="Helvetica-Oblique", textColor=GRAY)
bullet_style = ParagraphStyle("bullet", parent=body_style, leftIndent=11, bulletIndent=1, spaceBefore=0.6)
MARGIN = 45
WIDTH = A4[0] - 2 * MARGIN - 12  # the page frame keeps 6pt padding on each side


def link(text, url):
    return f'<a href="{url}" color="#1d4ed8">{text}</a>'


def section(title):
    return [Paragraph(title.upper(), section_style), HRFlowable(width="100%", thickness=1.1, color=INK, spaceBefore=2, spaceAfter=3.5)]


def row(left, right, left_st=left_style, right_st=right_style, split=0.62, space=1.5):
    t = Table([[Paragraph(left, left_st), Paragraph(right, right_st)]], colWidths=[WIDTH * split, WIDTH * (1 - split)])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), space),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return t


def bullets(*items):
    return [Paragraph(i, bullet_style, bulletText="•") for i in items]


dot = '&nbsp;&nbsp;•&nbsp;&nbsp;'
story = [
    Paragraph("Jesler Guzman", name_style),
    Spacer(1, 2),
    Paragraph(
        "Valenzuela City, Metro Manila, Philippines" + dot + "0976 636 7027" + dot
        + link("jesler.guzman210@gmail.com", "mailto:jesler.guzman210@gmail.com"),
        contact_style,
    ),
    Paragraph(
        link("linkedin.com/in/jeslerguzman", "https://www.linkedin.com/in/jeslerguzman/") + dot
        + link("jesler-portfolio.vercel.app", "https://jesler-portfolio.vercel.app") + dot
        + link("github.com/DAKDAK21", "https://github.com/DAKDAK21"),
        contact_style,
    ),
    Spacer(1, 4),
]

story += section("Career Objective")
story.append(Paragraph(
    "Fourth-year BS Information Technology student at STI College Caloocan and aspiring web developer, seeking a "
    "480-hour On-the-Job Training (OJT) internship starting February 2027. I want to contribute to real web systems "
    "using React, Node.js, Express and MySQL while learning from experienced professionals.",
    body_style,
))

story += section("Education")
story.append(row("STI College – Caloocan", "2023 – Expected Graduation: Aug 2027", split=0.5))
story.append(Paragraph("Bachelor of Science in Information Technology", sub_style))
story += bullets(
    "<b>Relevant Coursework:</b> Database Management Systems, Systems Analysis and Design, Web Development, "
    "Networking Fundamentals, Object-Oriented Programming, Information Security"
)
story.append(Spacer(1, 3))
story.append(row("STI College – Caloocan", "2022 – 2023", split=0.5))
story.append(Paragraph("Senior High School – TVL Track (Information and Communications Technology)", sub_style))
story += bullets("Graduated: 2023")

story += section("Project Experience")
story.append(row(
    "TraiSki: Learning Management System (Capstone) &nbsp;<font name='Helvetica' color='#555b66'>|</font> "
    + "<font name='Helvetica'>" + link("srtvhs-elms.website", "https://srtvhs-elms.website") + "</font>",
    "STI College – Caloocan | 2026",
    split=0.7,
))
story += bullets(
    "Co-developed an LMS for San Rafael Technological and Vocational High School with four portals "
    "(Student, Teacher, Admin, Super Admin) so classes can continue online.",
    "Handled frontend and backend work during Capstone 2: built and fixed features in the React pages and the "
    "Node.js/Express REST API with MySQL, working from the design made by our team leader.",
    "System features include auto-generated, server-scored quizzes, rubric grading, per-student deadlines, "
    "JWT login with optional authenticator-app 2FA, audit logs, and Excel import/export.",
    "Defended in October 2026 and passed with a grade of 90.",
)
story.append(Spacer(1, 3))
story.append(row(
    "Personal Portfolio Website &nbsp;<font name='Helvetica' color='#555b66'>|</font> "
    + "<font name='Helvetica'>" + link("jesler-portfolio.vercel.app", "https://jesler-portfolio.vercel.app") + "</font>",
    "2026",
))
story += bullets(
    "Responsive portfolio built with React, Vite and Tailwind CSS and deployed on Vercel, with light/dark mode, "
    "a certificate viewer and a built-in FAQ chatbot."
)
story.append(Spacer(1, 3))
story.append(row("McDollibee POS Simulator", "STI College – Caloocan | 2022"))
story += bullets(
    "Fast-food cashier simulator made with a classmate in Grade 12 using HTML, CSS and JavaScript: takes orders "
    "and quantities, checks that the cash is enough, and prints a receipt with the total and change."
)
story.append(Spacer(1, 3))
story.append(row("Student Information Management System", "STI College – Caloocan | 2022"))
story += bullets("Designed a basic student records system using MySQL and an HTML, CSS and JavaScript interface.")

story += section("Technical Skills")
for label, value in [
    ("Frontend", "React, JavaScript (ES6+), HTML, CSS, Tailwind CSS, Vite, Responsive Design"),
    ("Backend", "Node.js, Express, REST APIs, JWT Authentication"),
    ("Database", "MySQL, Database Design and Queries, Migrations"),
    ("Tools &amp; Cloud", "Git &amp; GitHub, Vercel, AWS (EC2, VPC, S3, Lambda, IAM basics), Playwright, Postman, VS Code"),
    ("Other Languages", "Python, Java, C#"),
    ("IT &amp; Networking", "Computer Troubleshooting, Network Setup and Basic Configuration"),
]:
    story.append(Paragraph(f"<b>{label}:</b> {value}", ParagraphStyle("skill", parent=body_style, spaceBefore=1.2)))

story += section("Certifications and Training")
story.append(row(
    "<font name='Helvetica'>AWS Skill Builder: 11 courses completed</font>",
    "AWS Training &amp; Certification | Nov 2026",
    split=0.5,
))
story.append(Paragraph(
    "EC2, VPC, S3, Lambda, IAM, DynamoDB, API Gateway, CloudFront, KMS and more",
    ParagraphStyle("courses", parent=body_style, fontSize=9.2, leading=11.6, textColor=GRAY, leftIndent=11),
))
story.append(row(
    "<font name='Helvetica'>Collaborative Robot Programming Level III</font>",
    "St. Amatiel Technological Institute | In progress",
    split=0.5,
))

story += section("Organizational Involvement")
story.append(row("Member – IT Student Organization", "STI College – Caloocan | 2022 – 2023"))
story += bullets("Participated in technology-related events, seminars and collaborative projects.")

story += section("Soft Skills")
story.append(Paragraph(
    "Problem-solving and analytical thinking, team collaboration, time management, communication, adaptability "
    "and willingness to learn.",
    body_style,
))

story += section("References")
story.append(Paragraph("Available upon request.", ParagraphStyle("ref", parent=body_style, fontName="Helvetica-Oblique")))

pages = []


def count(canvas, doc):
    pages.append(canvas.getPageNumber())


doc = SimpleDocTemplate(
    out_pdf, pagesize=A4, leftMargin=MARGIN, rightMargin=MARGIN, topMargin=24, bottomMargin=20,
    title="Jesler Guzman – Resume", author="Jesler Guzman", subject="Resume",
)
doc.build(story, onFirstPage=count, onLaterPages=count)
print("pages:", len(pages))

import pypdfium2 as pdfium

page = pdfium.PdfDocument(out_pdf)[0]
img = page.render(scale=1191 / page.get_width()).to_pil().convert("RGB").resize((1191, 1684))
img.save(out_jpg, quality=90, optimize=True)
print("jpg:", img.size)
