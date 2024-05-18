import Image from 'next/image'
import { useState } from 'react'
import { aboutMeData } from '../../data/aboutMeData'

function AboutMeBio() {
    const [aboutMe, setAboutMe] = useState(aboutMeData)
    return (
        <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                <Image
                    src="/images/profile.jpeg"
                    width={200}
                    height={200}
                    className="rounded-lg"
                    alt="Profile Image"
                />
            </div>

            <div className="font-general-regular w-full sm:w-3/4 text-left">
                {/* {aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))} */}
                <h1 className="text-xl font-bold ml-4 text-xl text-primary-dark dark:text-primary-light ">
                    Сургалтын төв гэж юу вэ?
                </h1>{' '}
                <p className="	border rounded-lg  text-xl text-primary-dark dark:text-primary-light mb-8 sm:p-5">
                    {' '}
                    Боловсролын байгууллага нь сургуулийн өмнөх, ерөнхий
                    боловсролын сургалтын хө- төлбөр, төлөвлөгөө, сургалтын арга
                    зүй, үнэлгээ, сурах бичгийн тохирц, нийцлийг шалган турших
                    түшиц цэцэрлэг, ерөнхий боловсролын сургуультай байж болдог
                    юм. Сургалтын төв нь бага бүтээлийн хувьд оршин буй орон
                    сууц, тэнхим, бизнесийн сургалтын центр, институт эсвэл
                    сургалтын сан юм. Тэдгээр нь сонголтын санал, шинжилгээ,
                    ажиллагааны байр шинжилгээ, мэргэжлийн хөгжил, байгууллагын
                    шин- жилгээ, байгууллагын өсөлтийн багш нарт сургалт
                    явуулахад зориулагдсан болно. Ямар нэгэн чиглэлээр сургалт
                    явуулахад тухайн сургалтын төв нь үзүүлэх болом- жийг
                    олгодог. Сургалтын хөтөлбөр бол (өөрөөр Сургалтын
                    хөтөлбөр-төлөвлөгөө гэх нь бий) сургалтын төлөвлөгөөнд орсон
                    хичээлүүдийг тухайн улсын боловсролын бо- лоод олон улсын
                    боловсролын стандарт шалгуурт нийцүүлэн баталсан бөгөөд
                    хичээл тус бүрээр нарийвчилж, тодорхойлсон цогц баримт бичиг
                    юм.
                </p>
            </div>
        </div>
    )
}

export default AboutMeBio
