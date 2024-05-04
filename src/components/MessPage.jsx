import coverImage from '../assets/coverimage.jpeg'
const MessPage = (props) => {
  console.log('mess page');
  return (
    <section>
      <div>
                <img
                    src={coverImage}
                    className="w-full h-[30rem] object-fill"
                />
            </div>
    </section>
  )
}

export default MessPage;