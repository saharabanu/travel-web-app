import banner from '../assets/images/commonbanner.jpg'

const ChooseUs = () => {
  return (
    <div className=" ">
    <div className='grid grid-cols-2 gap-16 px-10' >
        <div>
            <img src={banner} alt="" className='w-full h-96 '/>
        </div>
        <div className=''>
        <h5 className='text-2xl pt-5 text-red-500' style={{fontFamily: 'Dancing Script' 
}}>About Us</h5>
        <h2 className='font-bold text-2xl py-5'>Why Select Us For <br /> your Vacation</h2>
        <div className='space-y-1 text-sm'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum eius nemo sapiente ratione iure accusamus minima, tempora assumenda saepe iusto distinctio esse nihil molestias doloribus suscipit illo possimus accusantium. Numquam at velit magni corrupti necessitatibus maxime corporis deleniti tempora inventore.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum eius nemo sapiente ratione iure accusamus minima, tempora assumenda saepe iusto distinctio esse nihil molestias doloribus suscipit illo possimus accusantium. Numquam at velit magni corrupti necessitatibus maxime corporis deleniti tempora inventore.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque aliquam tempore autem tempora hic labore vel velit inventore nobis.</p>
        </div>

        </div>
    </div>

    </div>
  )
}

export default ChooseUs