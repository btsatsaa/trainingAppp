import { useCountUp } from 'react-countup'
import CounterItem from './CounterItem'

function AboutCounter() {
    useCountUp({ ref: 'experienceCounter', end: 4, duration: 2 })
    useCountUp({ ref: 'githubStarsCounter', end: 12, duration: 2 })
    useCountUp({ ref: 'feedbackCounter', end: 5, duration: 2 })
    useCountUp({ ref: 'projectsCounter', end: 20, duration: 2 })

    return (
        <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
            <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
                <CounterItem
                    title="Туршлага "
                    counter={<span id="experienceCounter" />}
                    measurement=""
                />

                <CounterItem
                    title="Миний GITHUB.com"
                    counter={<span id="githubStarsCounter" />}
                    measurement="k+"
                />

                <CounterItem
                    title="Ажлын санал"
                    counter={<span id="feedbackCounter" />}
                    measurement="+"
                />

                <CounterItem
                    title="Хийсэн төсөл"
                    counter={<span id="projectsCounter" />}
                    measurement="+"
                />
            </div>
        </div>
    )
}

export default AboutCounter
