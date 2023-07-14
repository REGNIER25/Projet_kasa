
import './home.css';
import Header from '../header/header';
import Footer from '../footer/footer';
function Home() {
  return (
    <>
<Header/>

    <main >
  
      <div className="banner">
        <p className="slogan">Chez vous, partout et ailleurs</p>
      </div>

      <div className="gallery">
        <div className="location">
          <p className="titre">Titre de la location</p>

          {/* props: */}
          id =""
          title
          cover
          pictures
          description
          host
          rating
          location
          equipments
          tags

          {/* {
		"id": "7af00cd6",
		"title": "Nid douillet au coeur du 11ème",
		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
		"pictures": [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-4.jpg"
		],
		"description": "Venez découvrir Paris en séjournant dans ce nid douillet au coeur du 11ème. La vue sur le parc résidentiel saura vous reposer de vos longues journées de tourisme dans la capitale française. Et pour les plus fêtards d'entre vous, la rue Jean Pierre Timbaud vous permettra de découvrir la night-life parisienne à seulement 5 minutes de l'appartement.",
		"host": {
			"name": "Della Case",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
		},
		"rating": "3",
		"location": "Ile de France - Paris 11e",
		"equipments": [
			"Micro-Ondes",
			"Wi-fi",
			"Chambre Séparée",
			"Climatisation",
			"Télévision"
		],
		"tags": [
			"Parmentier",
			"Marais",
			"Parc",
			"Night Life"
		]
	}, */}

        </div>
        <div className="location">
          <p className="titre">Titre de la location</p>
        </div>
        <div className="location">
          <p className="titre">Titre de la location</p>
        </div>
        <div className="location">
          <p className="titre">Titre de la location</p>
        </div>
        <div className="location">
          <p className="titre">Titre de la location</p>
        </div>
        <div className="location">
          <p className="titre">Titre de la location</p>
        </div>

      </div>

    </main>
    <Footer/>
    </>
  );
}

export default Home;