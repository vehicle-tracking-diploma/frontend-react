import lastLoaction from '../../assets/car-placeholder (2).png'
import logo from '../../assets/map 1.svg'
import {useNavigate} from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        navigate("/login")
    }

    return (
        <>

            <nav
                className="bg-my-blue dark:bg-gray-900 fixed w-full z-20 top-0 left-0 text-white ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={logo} className="h-8 mr-3"/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VTS</span>
                    </a>
                    <div className="flex md:order-2">
                        <button onClick={logout} type="button"
                                className="text-white outline:none border:none bg-none ">
                            Выйти
                        </button>
                    </div>
                </div>
            </nav>
            <div className="wrapper">
                <div>
                    <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4">
                        <div className="w-full flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center text-center space-y-4">
                                <h1 className="text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800">Карты</h1>
                            </div>
                            <div
                                className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                                <button
                                    className="w-full  border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6 bg-white dark:bg-gray-800 rounded drop-shadow-md hover:bg-gray-100">
                                    <img src={lastLoaction} width={64} height={64}/>
                                    <p className="text-xl font-medium leading-5 text-gray-800">Последнее
                                        местоположение</p>
                                </button>
                                <button
                                    className="w-full  border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6 bg-white dark:bg-gray-800 rounded drop-shadow-md hover:bg-gray-100">
                                    <img src={lastLoaction} width={64} height={64}/>
                                    <p className="text-xl font-medium leading-5 text-gray-800">Автомобиль на карте</p>
                                </button>
                                <button
                                    className="w-full  border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6 bg-white dark:bg-gray-800 rounded drop-shadow-md hover:bg-gray-100">
                                    <img src={lastLoaction} width={64} height={64}/>
                                    <p className="text-xl font-medium leading-5 text-gray-800">Группа трекеров на
                                        карте</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4">
                        <div className="w-full flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center text-center space-y-4">
                                <h1 className="text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800">Отчеты</h1>
                            </div>
                            <div
                                className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                                <button
                                    className="w-full  border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6 bg-white dark:bg-gray-800 rounded drop-shadow-md hover:bg-gray-100">
                                    <img src={lastLoaction} width={64} height={64}/>
                                    <p className="text-xl font-medium leading-5 text-gray-800">Детальные отчеты</p>
                                </button>
                                <button
                                    className="w-full  border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6 bg-white dark:bg-gray-800 rounded drop-shadow-md hover:bg-gray-100">
                                    <img src={lastLoaction} width={64} height={64}/>
                                    <p className="text-xl font-medium leading-5 text-gray-800">Группа трекеров</p>
                                </button>
                                <button
                                    className="w-full  border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6 bg-white dark:bg-gray-800 rounded drop-shadow-md hover:bg-gray-100">
                                    <img src={lastLoaction} width={64} height={64}/>
                                    <p className="text-xl font-medium leading-5 text-gray-800">Итоговые отчеты</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4">
                        <div className="w-full flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center text-center space-y-4">
                                <h1 className="text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800">Администрирование</h1>
                            </div>
                            <div
                                className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                                <button
                                    className="w-full  border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6 bg-white dark:bg-gray-800 rounded drop-shadow-md hover:bg-gray-100">
                                    <img src={lastLoaction} width={64} height={64}/>
                                    <p className="text-xl font-medium leading-5 text-gray-800">Управление
                                        пользователями</p>
                                </button>
                                <button
                                    className="w-full  border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6 bg-white dark:bg-gray-800 rounded drop-shadow-md hover:bg-gray-100">
                                    <img src={lastLoaction} width={64} height={64}/>
                                    <p className="text-xl font-medium leading-5 text-gray-800">Управление ролями</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;