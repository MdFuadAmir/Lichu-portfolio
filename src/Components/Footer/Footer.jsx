import lichu from "../../assets/3d96eba59a324ac1570e174fd5bb5e94-removebg-preview.png"

const Footer = () => {
    return (
        <>
        <footer className="footer p-10 bg-base-200 text-base-content mt-12">
  <aside>
    <img src={lichu} alt="" className="w-24 h-24 rounded-full"/>
    <p>Lichu Industries Ltd.<br/>Providing reliable tech since 2002</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>

</footer>
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p className="font-bold text-md">Copyright © 2024 - All right reserved by Lichu Industries Ltd</p>
  </aside>
</footer>
        </>
    );
};

export default Footer;