import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about">
            <div className="bg-neutral-800 rounded-xl shadow-2xl overflow-hidden p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
                    <div className="md:col-span-1 flex justify-center">
                        <img 
                            className="h-48 w-48 md:h-64 md:w-64 rounded-full object-cover shadow-lg border-4 border-neutral-700" 
                            src="https://storage.googleapis.com/aai-web-samples/previews/22370f17-f58c-4a1d-a51f-d7482811a2f2.png" 
                            alt="Portrait of PTWaffles" 
                        />
                    </div>
                    <div className="md:col-span-2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                            Hey there! I'm <span className="text-teal-400">PTWaffles</span>.
                        </h1>
                        <p className="text-lg text-neutral-400 max-w-2xl mx-auto md:mx-0">
                           Just a dev who loves building cool stuff, diving into a good anime, and maybe a bit too much gaming. I code, I watch, I play - that's pretty much the loop.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;