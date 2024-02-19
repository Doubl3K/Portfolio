export function DrawerItem({ title, routingTarget } : { title: string, routingTarget: string }) {
    return (
        <div onClick={() => routeTo(routingTarget)} className="hover:bg-blue-500 cursor-pointer font-['Fira_Code']">
            <li>{title}{"=>"}</li>
        </div>
    );
}

function routeTo(routingTarget: string) {
    console.log("Routing to " + routingTarget);
    
}

