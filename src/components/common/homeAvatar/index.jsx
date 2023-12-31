import { useIcons } from "../../../hooks";
import avatar from "../../../assets/img/avatar-svg.svg";
import vite from "../../../assets/img/vite.svg";
import firebase from "../../../assets/img/firebase-icon.svg";
import "./styles.scss";

const HomeAvatar = () => {
  const { Icon } = useIcons("circle__icon");

  return (
    <div className='svg__profile'>
      <div className='avatar__container'>
        <svg
          className='avatar__background'
          viewBox='0 0 550 591'
          xmlns='http://www.w3.org/2000/svg'
        >
          <mask id='maskBlob' mask-type='alpha'>
            <path
              d='M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z'
            />
          </mask>
          <g mask='url(#maskBlob)'>
            <path
              d='M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z'
            />
            <rect x='37' width='476' height='630' fill='url(#pattern0)' />
          </g>
          <rect x='37' width='476' height='300' fill='url(#pattern1)' />
          <defs>
            <pattern
              id='pattern0'
              patternContentUnits='objectBoundingBox'
              width='1'
              height='1'
            >
              <use
                href='#imageBlob'
                transform='matrix(0.00143057 0 0 0.00108108 0.0404062 0)'
              />
            </pattern>
            <pattern
              id='pattern1'
              patternContentUnits='objectBoundingBox'
              width='1'
              height='1'
            >
              <use
                href='#imageBlob'
                transform='matrix(0.00143057 0 0 0.00226984 0.0404062 0)'
              />
            </pattern>
            <image
              className='avatar'
              id='imageBlob'
              width='640'
              height='925'
              href={avatar}
            />
          </defs>
        </svg>
      </div>
      <div className='avatar__container--circle'>
        <Icon icon='fab fa-css3-alt' />
      </div>
      <div className='avatar__container--circle'>
        <Icon icon='fab fa-bootstrap' />
      </div>
      <div className='avatar__container--circle'>
        <Icon icon='fab fa-react' />
      </div>
      <div className='avatar__container--circle'>
        <Icon icon='fab fa-npm' />
      </div>
      <div className='avatar__container--circle'>
        <Icon icon='fab fa-js-square' />
      </div>
      <div className='avatar__container--circle'>
        <Icon icon='fab fa-html5' />
      </div>
      <div className='avatar__container--circle'>
        <Icon icon='fab fa-git-alt' />
      </div>
      <div className='avatar__container--circle'>
        <Icon icon='fab fa-github-square' />
      </div>
      <div className='avatar__container--circle'>
        <Icon icon='fab fa-sass' />
      </div>
      <div className='avatar__container--circle'>
        <img src={firebase} alt='Firebase' className='circle__icon' />
      </div>
      <div className='avatar__container--circle'>
        <img src={vite} alt='ViteJS' className='circle__icon' />
      </div>
    </div>
  );
};

export { HomeAvatar };
