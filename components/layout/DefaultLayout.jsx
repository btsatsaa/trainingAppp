import AppHeader from '../shared/AppHeader'
import AppFooter from '../shared/AppFooter'
import PagesMetaHead from '../PagesMetaHead'
import VerticalNav from '../nav/nav'

const DefaultLayout = ({ children }) => {
    return (
        <>
            <PagesMetaHead />
            <AppHeader />
            <VerticalNav />

            <div>{children}</div>
            <AppFooter />
        </>
    )
}

export default DefaultLayout
