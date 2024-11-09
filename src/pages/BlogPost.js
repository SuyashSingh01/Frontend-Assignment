import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JointeamSection from '../components/JointeamSection';
import { posts, Relatedpost } from '../Data';


function BlogPost() {
  const { id } = useParams();
  const [story, setStory] = useState({});


  useEffect(() => {
    const result = posts.find(({ id }) => id === id); // Ensure `id` matches `ele.id` type
    setStory(result);
  }, [id]);

  console.log("story", story);
  if (!story) {
    return <div className="text-center flex justify-center py-10">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-gray-500">{story.author}</h2>
        <h1 className="text-xl md:text-3xl font-bold font-headingfont text-gray-800 my-2">
          {story.title}
        </h1>
        <span className="text-sm text-purple-500 font-semibold">{story.Tag}</span>
      </div>

      {/* Main Image */}
      <div className="mb-8">
        <img
          src={story.image}
          alt="Blog Main"
          className="w-full rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="space-y-6 text-gray-700 max-w-4xl">
        <p>
          {story.Description}
        </p>
        <p>
          <p className='font-headingfont font-bold text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed porro nostrum similique commodi voluptatum perferendis facere iste vero ratione autem quia fugiat distinctio placeat, fuga tempora iure quisquam dolorem quo?
          Beatae fuga at corrupti, voluptas voluptate asperiores voluptates atque rerum ea dolor dicta fugit unde sunt recusandae nisi expedita dignissimos quae mollitia consequuntur ex ratione veritatis enim aliquid. Dolores, similique.
          Qui repellendus, repellat, nam quae deserunt earum excepturi atque odio assumenda eius eligendi modi iure blanditiis quo, recusandae minima iusto quod sequi fugiat molestiae rem in tenetur! Saepe, iure corrupti!
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Neque volutpat ac tincidunt vitae</li>
          <li>Massa eget egestas purus viverra accumsan</li>
        </ul>
        <p>
          <p className='font-headingfont font-bold text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sit atque vero laudantium, quis minima eius architecto, voluptates repudiandae, dolores a possimus dolorum odit fugit. Veniam recusandae cupiditate quaerat ipsa.
          Odit quasi dicta, alias voluptatum commodi atque magni illum esse ratione quaerat sit suscipit aliquid quidem architecto mollitia, exercitationem eum soluta, eaque ea fuga beatae? Dolor velit dolores earum quibusdam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam totam expedita ut rerum omnis! Similique eius quis voluptatibus alias vero quia totam. Ducimus itaque accusamus illo tenetur, unde voluptatibus.

        </p>
      </div>

      {/* Related Posts */}
      <div className="my-20 mb-24">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">What to read next</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Relatedpost.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 my-8">
              <img
                src={item.img}
                alt="Related Post"
                className="w-full h-full object-cover rounded-md mb-4  "
              />
              <span className="text-sm text-gray-500">Finance</span>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                A UK Case Study Creating a Studious Environment for Students
              </h3>
            </div>
          ))}
        </div>
      </div>

      <JointeamSection />
    </div>
  );
}

export default BlogPost;
