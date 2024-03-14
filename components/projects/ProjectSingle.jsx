import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const imageStyle = { maxWidth: "100%", height: "auto" };

const ProjectSingle = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link
        // href="/projects/[id]"
        href="/traDetail"
        // as={"/projects/" + props.id}
        aria-label="Single Project"
        passHref
      >
        {/* <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<Image
							src={props.img}
							className="rounded-t-xl border-none"
							alt="Single Project"
							layout="responsive"
							width={100}
							height={90}
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
							{props.title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{props.category}
						</span>
					</div>
				</div> */}
        {/* /////////////// */}
        <div>
          <div className=" rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden">
              <Image
                src={props.img}
                className="rounded-t-xl border-none"
                alt="Single Project"
                layout="responsive"
                width={100}
                height={90}
              />
            </div>

            <div className="flex justify-between">
              <div className="mt-6 block font-normaltext-primary-dark dark:text-primary-light">
                Гар бөмбөгийн сургалт
              </div>
              <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green text-primary-dark dark:text-primary-light rounded-md px-1">
                $6
              </div>
            </div>
            <p
              aria-hidden="true"
              className="mt-2 mb-5 text-2xl font-semibold text-primary-dark dark:text-primary-light"
            >
              Анхан, дунд шат
            </p>

            <div className="flex justify-between border-2 text-primary-dark dark:text-primary-light rounded-md p-2">
              <p>Анги дүүргэлт 20 хүүхэд</p>
              <div className="flex flex-row space-x-4">
                <div className="flex">
                  <img src={"/account.svg"} alt="circle" />
                  {/* <p className="text-lightgrey ml-1">120</p> */}
                </div>
                <div className="flex">
                  <img src={"/Star.svg"} alt="star" />
                  <img src={"/Star.svg"} alt="star" />
                  <img src={"/Star.svg"} alt="star" />
                  <img src={"/Star.svg"} alt="star" />
                  {/* <p className="ml-1">4.5</p> */}
                </div>
              </div>
            </div>
            <div className="text-center px-4 py-6">
              <span className="text-lg text-ternary-dark dark:text-ternary-light">
                {props.category}
              </span>
            </div>
            <div  className="hover:bg-gray-200 rounded-xl bg-primary-light dark:bg-primary-dark  text-center text-lg px-4 py-2 text-primary-dark dark:text-primary-light">
              <button>
                Дэлгэрэнгүй харах
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
