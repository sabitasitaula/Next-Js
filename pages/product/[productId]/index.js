
import {useRouter} from 'next/router'

const index = () => {
    const router=useRouter();
    const route=router.query.productId
    return (
        <div>
            {route}
        </div>
    )
}

export default index
