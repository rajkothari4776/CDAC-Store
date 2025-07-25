import { useNavigate } from "react-router-dom";
const BackButton = () => {
    const navigate = useNavigate();
    return (
        <div className=" mt-14 ml-12">
            <button
                onClick={() => navigate(-1)}
                className="text-sm text-gray-600 hover:text-black flex items-center gap-1"
            >
                ← Back to Projects
            </button>
        </div>
    )
}

export default BackButton