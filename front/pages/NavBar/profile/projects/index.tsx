import React, { FC, useState, useEffect, useRef, useCallback } from 'react';
import { ProjectsContents } from './styles';
interface Props {
    project: any,
    // key: number
}

const Projects: FC<Props> = ({ project }) => {
    const [subproj, setSubproj] = useState(false);
    const selectedRef = useRef<any>();
    const showSubproj = () => {setSubproj(!subproj);  if (subproj) selectedRef.current; else selectedRef == null;};

    // useEffect(() => {
    //     console.log(selectedRef)
    //     if (!selectedRef) return;

    //     selectedRef.current.style.backgroundColor='white'
    //     console.log(selectedRef)
    // }, [])

    return (
        <ProjectsContents>
            <div ref={selectedRef} className="project-name" onClick={project.list && showSubproj}>
                    <div>{project.name}</div>
                    <div className="oval" />
                    <div className="open-c">
                    {project.list && subproj
                        ? <img className="open" src='imgs/projects/ic-dropdwon-default.svg' />
                        : <img src='imgs/projects/ic-dropdwon-default.svg' />
                        }
                    </div>

            </div>
                <div className="contents">
                {subproj &&
                        project.list.map((item:any) => {
                            // console.log(project.list);
                            return (
                                <div className="quiz-name">
                                <div key={item.name}>{item.name}</div>
                                <div className="oval-quiz"></div>
                                </div>
                            );
                        })}
                </div>
            </ProjectsContents>
    );
}
            export default Projects
