import Page from '../page.js';

export default class About extends Page{
    constructor(){
        super();
        this.html = `
                <section class="prog">
                    <h2>Graphic Design</h2>
                    <p>Credential:<strong>Advanced Diploma</strong> | Program Code: 11571 | Length: 6 semesters | Program Starting Between: September 2020- August 2021</p>
                    <button>Print course information as pdf</button>

                    <p>Humber’s Graphic Design advanced diploma program develops creative and strategic designers who execute for a wide range of interactive media such as web and screen, user interaction, motion design and also traditional print products.
                        While learning and mastering design concepts, you will generate creative solutions and produce visuals for effective multimedia communication. As you gain desirable knowledge and skills, you will be exposed to the many topics and tasks 
                        required in contemporary design work. You will become strategically and typographically skilled and master digital, editorial, interactive, information, motion and web design techniques. Additionally, relevant programming and entrepreneurship 
                        knowledge will round out a comprehensive skillset.</p>

                    <p>As part of our interaction and design common platform cluster, this program will expose you to many aspects of design and allow you to collaborate with students in related fields. The first semester is shared with the Multimedia Design and 
                        Development program, and the first year of this program is shared with the Web Design and Interactive Media program. Your exposure to different types of design work and common programming elements will enable you to investigate your options and 
                        choose a focus prior to your second year of study.</p>
                        
                    <p>You will explore the many facets of graphic design and be instructed and trained on industry-based technology and software. Cross-disciplinary projects will allow you to develop collaborative and teamwork skills while preparing you for workplace 
                        environments. This program includes the unique opportunity to work with BuildingF, our in-house creative & business communications hub, working on real projects for clients while building your portfolio and professional contacts.</p>

                    <button>More Information for this course</button>
                </section>

                <section class="prog">
                    <h2>Web Design and Development</h2>
                    <p>Credential:<strong>Certificate of Achievement</strong> | Program Code: WD911 | Length: 2 semesters | Program Starting Between: September 2020- August 2021</p>
                    <button>Print course information as pdf</button>

                    <p>If you describe yourself as creative, resourceful, detail-oriented and a problem solver, then Humber's Web Design and Development certificate program is for you. You will learn to critically analyze problems and apply best practices to plan,
                        design and build websites/applications. You will build sites and apps from the ground up using the most up-to-date techniques and fundamental technologies. You will also learn to tackle technical challenges by developing strong troubleshooting 
                        and problem solving skills. The solutions you create along your journey will be curated into a captivating portfolio website at the end of the program</p>

                    <p>Our unique project-based approach leads students in the program through the entire process of creating websites and web applications. You will build static and dynamic websites utilizing the most current versions of industry-standard applications 
                        and tools. Programming and design skills are taught with a focus on following best practices and established industry standards including designing websites that are mobile-ready, accessible and future-proof.</p>
                        
                    <p>You will be constantly challenged to learn more through the escalating curriculum, while working in our dedicated computer lab. You will be guided by experienced faculty and industry professionals who are passionate about the web and related media
                        in a practical, hands-on style of teaching. Opportunities to network with potential employers, alumni and other professionals will help you to build your own network of invaluable contacts to shape your future career.

                        This program is not eligible for Ontario Student Assistance Program (OSAP). It is eligible for Second Career Funding. Further details and how to apply are found at <a href="#">ontario.ca/page/second-career</a>.</p>

                    <button>More Information for this course</button>
                </section>

                <section class="prog">
                    <h2>3D Modelling and Visual Effects Production</h2>
                    <p>Credential:<strong>Certificate of Achievement</strong> | Program Code: 11671 | Length: 2 semesters | Program Starting Between: September 2020- August 2021</p>
                    <button>Print course information as pdf</button>

                    <p>Humber's 3D Modelling and Visual Effects Production certificate program focuses on both the conceptual and the technical, as you learn to master visual techniques to bring ideas to life. You will develop skills in modelling, texturing and lighting, 
                        as well as in visual effects, compositing and digital cinematography. We employ a teaching process and course structure that requires content created in one course to be used to complete assignments in other courses. This “pipeline” process mirrors 
                        that of industry, allowing students to make a seamless transition into a real production environment.</p>

                    <p>The program is designed by artists for experienced traditional artists and animators who want to either develop or transition their skill sets for employment in the 3D and visual effects industries. The faculty take their years of industry experience 
                        into the classroom, straight from the studio. Their collective experience and passion in the gaming, television and film industries is the driving force that ensures the program meets the current and future needs of the industry.</p>
                        
                    <p>January intake scheduling: students will benefit from our streamlined flexible schedule, allowing them to work their day jobs while they study for their dream jobs. Our schedule will have students on campus and in classes on evenings and weekends.
                        Students will study in our state-of-the-art labs equipped with Cintiq tablets and the latest tools and software.

                        This program is not eligible for Ontario Student Assistance Program (OSAP). It is eligible for Second Career Funding. Further details and how to apply are found at <a href="#">ontario.ca/page/second-career.</a></p>

                    <button>More Information for this course</button>
                </section>
                
                <!--General information security-->
                <p class="info_main">Every attempt is made to ensure that information contained on this website is current and accurate. Humber reserves the right to correct any error or omission, modify or cancel any course, program, fee, timetable or campus location at 
                    any time without prior notice or liability to users or any other Person.</p>

                <p class="info_main">On June 29, 2018, the Provincial Government of Ontario announced the renaming of the Ministry of Advanced Education and Skills Development (MAESD) to the Ministry of Training, Colleges and Universities (MTCU). Both names may appear on this website.</p>

        `
    }
}