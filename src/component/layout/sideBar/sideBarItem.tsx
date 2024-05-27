import { NavLink } from "react-router-dom";
import styles from "./SideBarItem.module.css";

interface SideBarItemsProps {
  icon: React.ReactNode;
  name: string;
  link: string;
}

const SideBarItem: React.FC<SideBarItemsProps> = ({ icon, name, link }) => {
  return (
    <NavLink
      to={link}
      className={styles.sideBarItem}
      style={({ isActive }) => {
        return isActive
          ? {
              color: "#11643c",
              backgroundColor: "#f3f3f3",
              fontWeight: 600,
              fill: "#11643c",
              stroke: "#11643c",
            }
          : {};
      }}>
      {icon}
      <span>{name}</span>
    </NavLink>
  );
};

export default SideBarItem;
