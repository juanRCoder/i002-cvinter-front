import ProgressNav from "./ProgressNav"
import { Outlet } from "react-router-dom"
import CVPreview from "./views/CVPreview"

const CVTemplates = () => {
    return (
        <div className="flex flex-col h-screen">

            <ProgressNav />
            <div className=" flex flex-grow mt-4">
                <div className=" font-bold bg-slate-700 w-1/2 pr-2 h-full overflow-y-auto ">
                    <Outlet />
                </div>
                <div className=" font-bold bg-slate-500 w-1/2 pl-2 h-full overflow-y-auto">
                    <CVPreview />
                </div>
            </div>
        </div>
    );
};

export default CVTemplates