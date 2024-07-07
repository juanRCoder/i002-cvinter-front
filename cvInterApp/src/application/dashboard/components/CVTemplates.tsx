import ProgressNav from "./ProgressNav"
import { Outlet, useLocation } from "react-router-dom"
import CVPreview from "./views/CVPreview";


const CVTemplates = () => {
    const location = useLocation()
    if (location.pathname === "/CVTemplates") {
        return (
            <div className="flex flex-col h-screen overflow-hidden">
                <ProgressNav />
                <Outlet />
            </div>
        );
    }
    else {
        return (
            <>
                <ProgressNav />
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <div className="mb-4">
                            <Outlet />
                        </div>
                    </div>
                    <div className="w-1/2 p-4">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">CVPREVIEW HERE</h2>
                        </div>
                        <div className="flex justify-center">
                            <CVPreview />
                        </div>
                    </div>
                </div>
            </>


        )
    }


};

export default CVTemplates