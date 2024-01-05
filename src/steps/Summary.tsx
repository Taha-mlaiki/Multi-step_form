
import thank from "../assets/images/icon-thank-you.svg"

const Summary = () => {
  return (
    <div className='summary'>
      <div>
        <div className='text-center'>
            <img src={thank} alt="" />
            <h2>Thank you !</h2>
            <p> Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.</p>
        </div>
      </div>
    </div>
  )
}

export default Summary
