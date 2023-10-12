import { projectType } from "@/interFace/interFace"
import thumb1 from "../../public/assets/img/project/direct_furniture.jpg"
import thumb2 from "../../public/assets/img/project/casa_framing.jpg"
import thumb3 from "../../public/assets/img/project/bk_international.jpg"
import thumb4 from "../../public/assets/img/project/mozart.jpg"
import thumb5 from "../../public/assets/img/project/rodhos.png"
import thumb6 from "../../public/assets/img/project/bison.jpg"
import thumb7 from "../../public/assets/img/project/project-img-3.jpg"
import thumb8 from "../../public/assets/img/project/project-img-5.jpg"
import thumb9 from "../../public/assets/img/project/project-img-6.jpg"
import thumb10 from "../../public/assets/img/project/project-img-7.jpg"
import thumb11 from "../../public/assets/img/project/project-img-8.jpg"
import thumb12 from "../../public/assets/img/project/project-img-9.jpg"
import thumb13 from "../../public/assets/img/project/project-img-10.jpg"
import thumb14 from "../../public/assets/img/project/project-img-11.jpg"
import thumb15 from "../../public/assets/img/project/project-img-12.jpg"
import thumb16 from "../../public/assets/img/project/project-img-13.jpg"

const projects: projectType[] = [

    {
        id: 4,
        img: thumb4,
        title: "Mozart Logistics",
        tag: "Web Dev, SEO",
        networking: true,
        link: "https://mozartlogistics.ca/"
    },
    {
        id: 5,
        img: thumb5,
        title: "Rodhos",
        tag: "Web Dev, SEO, DM",
        graphic: true,
        link: "http://rodhos.ca/"
    },
    {
        id: 6,
        img: thumb6,
        title: "Bison Oilfield",
        tag: "Web Design+Dev, ERP",
        design: true,
        link: "https://www.bisonoilfield.com/"
    },
    {
        id: 2,
        img: thumb2,
        title: "Casa Framing",
        tag: "Web Design+Dev",
        design: true,
        link: "https://casaframing.ca/",
    },
    {
        id: 1,
        img: thumb1,
        title: "Direct Furniture",
        tag: "Web Dev",
        development: true,
        link: "https://directfurnituresurrey.ca/"
    },
    {
        id: 3,
        img: thumb3,
        title: "BK International",
        tag: "Web Dev, ERP, CRM",
        development: true,
        link: "http://bkinternationalgroup.com/"
    },
]

export default projects