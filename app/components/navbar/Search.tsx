'use client';

const Search = () => {
    return (
        <div 
            className="
                border-[1px]
                w-full
                md:w-auto
                py-2
                rounded-full
                shadow-sm
                hover:shadow-md
                transition
                cursor-pointer
            "
        > 
            <div
                className="
                    flex
                    flex-row
                    items-center
                    justify-between
                "
            >
                <div
                    className="
                        text-sm
                        font-semibold
                        px-6
                        hover:bg-gray-100   
                    "
                >
                    Dashboard
                </div>
                <div 
                    className="
                        hover:bg-gray-100
                        hidden
                        sm:block
                        text-sm
                        font-semibold
                        px-6
                        border-x-[1px]
                        flex-1
                        text-center
                    "
                >
                    Profile
                </div>
            </div>
        </div>
    );
}

export default Search;