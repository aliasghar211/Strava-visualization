'use client';

const Search = () => {
    return (
        <div 
            className="
                border-[1px]
                w-auto
                md:w-auto
                rounded-full
                shadow-md
                transition
                cursor-pointer
                group
            "
        > 
            <div
                className="
                    rounded-full
                    flex
                    flex-row
                    items-center
                    justify-between
                    h-full
                "
            >
                <div
                    className="
                        rounded-full
                        text-base
                        font-semibold
                        py-2
                        px-6
                        hover:bg-neutral-100
                        h-full
                        flex
                        items-center
                        sm:block
                    "
                >
                    Dashboard
                </div>
                <div className="
                    border-l-[1px]
                    group-hover:border-white
                    transition
                ">
                    <div 
                        className="
                            rounded-full
                            sm:block
                            text-base
                            font-semibold
                            py-2
                            px-6
                            flex-1
                            text-center
                            hover:bg-neutral-100
                            h-full
                            items-center
                        "
                    >
                        Profile
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
