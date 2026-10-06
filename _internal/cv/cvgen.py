# JOBS SITE copy of the CV generator.
# Source: Personal Brand/_internal/Job Applications/_CV generator/cvgen.py (copied 2026-10-06).
# The ONLY change: the portfolio link in the header points to the jobs site
# instead of nadirdesign.com. Content (MASTER) is untouched.
# Rebuild:  python3 cvgen.py   -> writes ../../assets/Nadir Mostefaoui - Product Designer - CV.pdf
# If the Master CV changes, copy the new MASTER block here and rebuild.
PORTFOLIO = "portfolio.nadirdesign.com"
import copy, json, sys
from reportlab.pdfgen import canvas
from reportlab.pdfbase.pdfmetrics import stringWidth as sw
from reportlab.lib.colors import HexColor, Color

W,H=595.2755737304688,841.8897705078125
L,R=51.4,543.9
INK=HexColor("#1a1a1a"); GREY=HexColor("#555555"); LINK=HexColor("#1a4fa0"); RULE=Color(.8,.8,.8)
LEAD=12.7

MASTER={
 "name":"Mohammed Nadir Mostefaoui",
 "headline":"Product Designer | B2B SaaS, ERP & Design Systems",
 "phone":True,
 "summary":"I design B2B software: ERP modules, dashboards, internal tools and mobile apps for operations teams. Since 2024 I've been the only designer on a live ERP platform, and I led its design system, Iksir (1,033 variables, 24 components), designed to WCAG 2.1 AA with Arabic/RTL support from the tokens up. Arabic is my first language, and I also work in French and English.",
 "jobs":[
  {"title":"Product Designer | Nawat Studio","meta":"Tlemcen, Algeria (Remote) | Jan 2026 - Present","bullets":[
    "Founded an independent product design studio for B2B and enterprise software. Datamaster Analytics is its first client.",
    "Led the Iksir design system for Datamaster's web and mobile products, working with a second designer whose work I reviewed. Three-layer tokens and support for Arabic (RTL), English and French. V1 shipped with 1,033 variables, 24 components and a documentation site that non-designers use."]},
  {"title":"Product Designer (Contract) | Datamaster Analytics","meta":"France (Remote) | Sep 2024 - Present","bullets":[
    "Only designer on a growing ERP platform, working daily with business analysts, tech leads and developers. Started as UI/UX Designer and moved to Product Designer after 3 months.",
    "Designed 5 core ERP modules: B2B Sales, Purchase, POS, Finance and Accounting. The B2B Sales module is now on its 9th major revision with the dev team.",
    "Designed Task Master, a task app for supermarket staff on mobile, tablet and desktop, over 2 iterations. It is in production, and usability tests with real staff showed inventory tasks taking about half the time.",
    "Leading an information architecture restructure of the whole platform ahead of a full redesign."]},
  {"title":"UI/UX Designer | Five Angles","meta":"Dubai (Remote) | Mar 2024 - Dec 2024","bullets":[
    "Designed the Super Admin, Admin and Teacher dashboards for a multi-role e-learning platform.",
    "Redesigned a real estate platform and designed a case management system for a charity.",
    "Designed landing pages for the agency's clients in several industries."]},
  {"title":"Co-Founder & Product Design Lead | Atqin","meta":"Tlemcen, Algeria (Volunteer) | 2023 - Present","bullets":[
    "Co-founded a volunteer community of Algerian tech professionals and coordinate its team projects.",
    "Designed a management platform for a nonprofit network of Quran clubs and a website for a historic cultural institution."]}],
 "skills":[
  ["Product design:","UX/UI design, interaction design, information architecture, user flows, wireframing, prototyping, usability testing, user research"],
  ["Design systems:","design tokens, component libraries, documentation, accessibility (WCAG 2.1 AA)"],
  ["Languages:","Arabic (native), French (professional), English (intermediate). Interfaces in Arabic/RTL, English and French"],
  ["Tools:","Figma (variables, components, auto layout, prototyping), FigJam, Notion, ClickUp, Jira"],
  ["Platforms:","web, iOS, Android, ERP and enterprise SaaS"],
  ["Process:","Agile, Scrum, developer handoff, working with stakeholders"],
  ["AI in my process:","Claude Cowork with the Figma MCP, Figma Make, Figma Weave"],
  ["Technical:","HTML, CSS (basics)"]],
 "education":["Studied Software Engineering at Abou Bekr Belkaid University, Tlemcen","Self-taught in product design"],
}

def wrap(text, font, size, width, first_indent=0):
    words=text.split(" "); lines=[]; cur=""
    avail=width-first_indent
    for w in words:
        t=(cur+" "+w) if cur else w
        if sw(t,font,size)<=avail+0.6 or not cur: cur=t
        else:
            lines.append(cur); cur=w; avail=width
    if cur: lines.append(cur)
    return lines

def build(cv, out):
    c=canvas.Canvas(out,pagesize=(W,H),pageCompression=1)
    c.setTitle("Mohammed Nadir Mostefaoui CV"); c.setAuthor("Mohammed Nadir Mostefaoui"); c.setSubject("Product Designer CV"); c.setCreator("Mohammed Nadir Mostefaoui")
    def T(x,y,s,font="Helvetica",size=9.5,col=INK):
        c.setFont(font,size); c.setFillColor(col); c.drawString(x,H-y,s); return x+sw(s,font,size)
    def link(x0,x1,y,url): c.linkURL(url,(x0,H-y-1.8,x1,H-y+9),relative=0,thickness=0)
    T(L,63.7,cv["name"],"Helvetica-Bold",18)
    T(L,79.2,cv["headline"],"Helvetica-Bold",10.5)
    x=T(L,93.7,"Tlemcen, Algeria (open to remote)  |  ",size=9,col=GREY)
    if cv.get("phone",True):
        x1=T(x,93.7,"+213 562 296 233",size=9,col=LINK); link(x,x1,93.7,"https://wa.me/213562296233"); x=T(x1,93.7,"  |  ",size=9,col=GREY)
    x1=T(x,93.7,"contact@nadirdesign.com",size=9,col=LINK); link(x,x1,93.7,"mailto:contact@nadirdesign.com")
    x1=T(L,105.7,"linkedin.com/in/nadir-mostefaoui",size=9,col=LINK); link(L,x1,105.7,"https://www.linkedin.com/in/nadir-mostefaoui/")
    x=T(x1,105.7,"  |  ",size=9,col=GREY); x1=T(x,105.7,PORTFOLIO,size=9,col=LINK); link(x,x1,105.7,"https://"+PORTFOLIO)
    def heading(y,s):
        T(L,y,s,"Helvetica-Bold",10.5); c.setStrokeColor(RULE); c.setLineWidth(.6); c.line(L,H-(y+5.1),R,H-(y+5.1))
    y=129.2; heading(y,"Summary"); y+=17.6
    for ln in wrap(cv["summary"],"Helvetica",9.5,R-L): T(L,y,ln); y+=LEAD
    y=y-LEAD+23.7; heading(y,"Experience"); y+=22.1
    for j,job in enumerate(cv["jobs"]):
        if j: y=y-LEAD+20.2
        T(L,y,job["title"],"Helvetica-Bold",10); y+=11.8
        T(L,y,job["meta"],size=9,col=GREY); y+=14.1
        for b in job["bullets"]:
            T(L,y-1.0,"•",size=8,col=HexColor("#000000"))
            for ln in wrap(b,"Helvetica",9.5,R-61.4): T(61.4,y,ln); y+=LEAD
    y=y-LEAD+23.7; heading(y,"Skills"); y+=17.6
    for lab,txt in cv["skills"]:
        T(L,y-1.0,"•",size=8,col=HexColor("#000000"))
        x=T(61.4,y,lab,"Helvetica-Bold",9.5)
        lines=wrap(txt,"Helvetica",9.5,R-61.4,first_indent=(x-61.4)+sw(" ","Helvetica",9.5))
        T(x," ".join([""]) and y or y," "+lines[0]); y+=LEAD
        for ln in lines[1:]: T(61.4,y,ln); y+=LEAD
    y=y-LEAD+23.7; heading(y,"Education"); y+=17.6
    for ln in cv["education"]: T(L,y,ln); y+=LEAD
    last=y-LEAD
    c.showPage(); c.save()
    return last
if __name__=="__main__":
    print(build(MASTER,"../../assets/Nadir Mostefaoui - Product Designer - CV.pdf"))
