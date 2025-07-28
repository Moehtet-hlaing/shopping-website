
const Footer = () => {
  const date = new Date();
  return (
    <footer className='mx-5 bg-black text-white text-center py-2 mt-auto text-xs md:text-sm'>
      &copy; {date.getFullYear()} <a href="https://mms-it.com" target='blank' className=' underline text-gray-300'>MMS IT</a>. All right reserved.
    </footer>
  )
}

export default Footer;