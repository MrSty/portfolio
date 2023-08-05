import Link from "next/link";

interface HeaderProps{
    children:React.ReactNode
}
const Header:React.FC<HeaderProps> = ({
    children
})=>{
    return(
        <div className="h-screen">
            <header className="flex justify-center">
                <div className="
                    w-3/5
                    h-10
                    flex
                    items-center
                    flex-row
                    justify-end
                    mt-2
                ">
                    <div className="flex w-fit gap-x-14 text-sm text-fourth/40 font-semibold">
                        <Link className="text-fourth" href={'#'}>Home</Link>
                        <Link href={'#projects'}> Projects</Link>
                        <Link href={'#contact'}> Contact</Link>
                    </div>
                </div>
            </header>
            <main className="flex justify-center">
                {children}
            </main>
        </div>
    );
}

export default Header;