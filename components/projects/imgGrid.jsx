import React, { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import ProjectSingle from './ProjectSingle'
import { imgData } from '../../data/imgData'

function imgGrid() {
    const [img, setImg] = useState(imgData)

    return (
        <div className="h-[850px] overflow-y-auto">
            {filteredLessons.length === 0 ? (
                <p className="text-center border bg-secondary-dark border-4 text-primary-dark dark:text-primary-light font-bold text-green-500">
                    Уучлаарай таны хайсан сургалт одоогоор байхгүй байна!
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 sm:gap-5">
                    {img.map((img) => (
                        <ProjectSingle
                            title={img.title}
                            image={img.img}
                            key={img.id}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default imgGrid
