export default function Profile() {

    return (
        <div className="max-w-3xl w-full mx-auto py-10">
            <header className="flex gap-10 pb-10">
                <div className="w-[254px] flex justify-center">
                    <figure className="w-[150px] h-[150px] rounded-[50%] overflow-hidden">
                        <img src="/images/kiisifelix.jpg" alt="Profile Pics" className="w-full h-full object-cover" />
                    </figure>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <h1>Artisan macaligupi</h1>
                        <div>
                            <button className="rounded-[8px] py-[6px] px-[20px] font-medium bg-[#efefef] hover:bg-[#dbdbdb] text-[14px]">Edit profile</button>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <p><span className="font-medium">25</span> posts</p>
                        <p><span className="font-medium">102</span> followers</p>
                    </div>
                    <div>
                        <h1 className="font-medium mb-2">Bio:</h1>
                        <div>
                            <h1>No words needed <br/>
                                Enjoy the silence <br/>
                                Let him cook
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
            <section className="border-t-[1px] border-[#dbdbdb]">
                <div>

                </div>
            </section>
        </div>
    )
}