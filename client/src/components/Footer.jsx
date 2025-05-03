export default function Footer(){
    return(
        <footer className="footer shadow-lg sm:footer-horizontal footer-center text-base-content p-4 bg-gray-600">
            <aside>
                <p 
                className="text-white text-lg">
                Copyright © {new Date().getFullYear()} - All right reserved by TaskManagementSystem Ltd</p>
            </aside>
        </footer>
    )
}