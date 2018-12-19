import React from 'react';
import { Link } from 'react-router-dom';
import Mapper from './Mapper.jsx';

export default function SingleProjectNav(props) {
  const { project, isCurrentProject } = props;
  const { thumbnails, name } = project.attributes;
  const { indexForProjectPics } = props.localState;

  return (
    <section className="project-thumbnails">
      <Mapper
        mapData={thumbnails}
        render={(thumbnail, idx) => {
          return (
            <Link
              key={idx}
              className={
                isCurrentProject && indexForProjectPics === idx
                  ? 'active'
                  : 'inactive'
              }
              to={`/projects/${name}/${idx + 1}`}
            >
              <img src={thumbnail} alt={`Thumbnail ${idx + 1}`} />
              <div id="thumbnail-highlight" />
            </Link>
          );
        }}
      />
    </section>
  );
}
