export default function Loader() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#141414]">
            <div className="flex gap-2">
                <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce"></div>
                <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
        </div>
    );
}
