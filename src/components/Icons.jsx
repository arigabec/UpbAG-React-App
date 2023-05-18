export const Icons = (props) => {
    const { icon, itemClass } = props;
    return (
      <li>
        <a href={`https://www.${icon}.com`} target="_blank" className='nav-icon'>
          <i className={`fab fa-${icon}`}></i>
        </a>
      </li>
    );
  };