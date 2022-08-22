export default function Footer() {
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>2 tasks left</p>
            <ul className="flex items-center space-x-1 text-xs">
                <li className="cursor-pointer font-bold">All</li>
                <li>|</li>
                <li className="cursor-pointer">Incomplete</li>
                <li>|</li>
                <li className="cursor-pointer">Complete</li>
                <li />
                <li />
                <li className="h-3 w-3 cursor-pointer rounded-full border-2 border-green-500 bg-green-500 md:hover:bg-green-500" />
                <li className="h-3 w-3 cursor-pointer rounded-full border-2 border-red-500 md:hover:bg-red-500" />
                <li className="h-3 w-3 cursor-pointer rounded-full border-2 border-yellow-500 md:hover:bg-yellow-500" />
            </ul>
        </div>
    );
}
