import {useRouter} from 'next/router'

function ReviewId() {
    const router=useRouter()
    const {productId,ReviewId}=router.query
    return (
        <div>
            review {ReviewId} for product {productId}
        </div>
    )
}

export default ReviewId