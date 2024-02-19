import { DrawerItem } from "./DrawerItem";

export function Drawer() {
    return (
        <div className="drawer absolute list-none left-0 top-0 text-2xl flex flex-col h-screen justify-around">
            <DrawerItem title="About Me" routingTarget="/about" />
            <DrawerItem title="Skills" routingTarget="/skills" />
            <DrawerItem title="Projects" routingTarget="/projects" />
        </div>
    )
}