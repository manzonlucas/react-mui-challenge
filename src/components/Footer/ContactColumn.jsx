import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function ContactColumn() {
  return (
    <>
      <span className="bg-[#CED0D3] text-slate-500 text-center py-2">Logo</span>
      <p>We sell custom products for all your needs. Packs and bulk products that you will enjoy.</p>
      <p className='font-bold'>
        <LocalPhoneIcon />
        +1-202-555-0129
      </p>
      <div className='flex gap-2 text-sm'>
        <div className='text-white bg-[#535C67] rounded-full w-10 h-10 flex justify-center items-center'>
          <FacebookIcon color='string' />
        </div>
        <div className='text-white bg-[#535C67] rounded-full w-10 h-10 flex justify-center items-center'>
          <TwitterIcon />
        </div>
        <div className='text-white bg-[#535C67] rounded-full w-10 h-10 flex justify-center items-center'>
          <InstagramIcon />
        </div>
        <div className='text-white bg-[#535C67] rounded-full w-10 h-10 flex justify-center items-center'>
          <LinkedInIcon />
        </div>
        <div className='text-white bg-[#535C67] rounded-full w-10 h-10 flex justify-center items-center'>
          <YouTubeIcon />
        </div>

      </div>
    </>
  )
}