import { FC } from 'react';
import { Switch } from "antd";

export const ThemeSwitcher: FC<{
  isDarkMode: boolean,
  onChange: (isChecked: boolean) => void,
  className?: string,
}> = ({isDarkMode, onChange, className}) => {

  return <div className={className}>
    <Switch checked={isDarkMode} onChange={onChange} style={{marginRight: '0.75rem'}}/>
    <svg width="24" viewBox="0 0 16 16" stroke={'none'} xmlnsXlink="http://www.w3.org/1999/xlink" style=
      {
        { fill: isDarkMode ? '#ffc400' : 'rgba(183,183,183,0.85)', }
    }
    >
        <path d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5
        4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" />
     </svg>
  </div>
}