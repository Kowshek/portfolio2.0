import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Certifications from './_components/Certifications';
import Experiences from './_components/Experiences';
import Highlights from './_components/Highlights';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import KineticMarquee from '@/components/KineticMarquee';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <KineticMarquee text="FULL-STACK ENGINEER • UI/UX ENTHUSIAST • OPEN SOURCE CONTRIBUTOR • PROBLEM SOLVER" />
            <AboutMe />
            <Skills />
            <Experiences />
            <Highlights />
            <ProjectList />
            <Certifications />
        </div>
    );
}
