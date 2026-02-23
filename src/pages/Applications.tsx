import appLivingRoom from "@/assets/app-living-room.jpg";
import appOffice from "@/assets/app-office.jpg";
import appHospitality from "@/assets/app-hospitality.jpg";
import appRetail from "@/assets/app-retail.jpg";
import appFeatureWall from "@/assets/app-feature-wall.jpg";

const applications = [
  {
    name: "Residential Interiors",
    desc: "Transform living spaces with textured accent walls that add depth and character. Our panels create warm, inviting environments that feel both luxurious and grounded in natural materials.",
    image: appLivingRoom,
  },
  {
    name: "Office Interiors",
    desc: "Elevate workplace design with architectural surfaces that inspire creativity and focus. From boardrooms to breakout areas, our panels bring professional sophistication to corporate environments.",
    image: appOffice,
  },
  {
    name: "Hospitality Projects",
    desc: "Create memorable first impressions with dramatic lobby walls and sophisticated guest spaces. Our panels deliver the premium aesthetic that hospitality brands demand.",
    image: appHospitality,
  },
  {
    name: "Retail & Showrooms",
    desc: "Stand out in competitive retail environments with distinctive wall surfaces that enhance brand storytelling. Our panels create immersive shopping experiences that customers remember.",
    image: appRetail,
  },
  {
    name: "Feature Walls",
    desc: "Make a bold design statement with dedicated feature walls that anchor interior spaces. Whether residential or commercial, our panels create focal points that define the character of any room.",
    image: appFeatureWall,
  },
];

const Applications = () => (
  <div>
    <section className="bg-surface section-padding-sm">
      <div className="container-wide mx-auto">
        <h1 className="heading-section text-foreground mb-2">Applications</h1>
        <p className="body-base text-muted-foreground">See how our panels transform every type of interior space.</p>
      </div>
    </section>

    {applications.map((app, i) => (
      <section key={app.name} className={`${i % 2 === 0 ? "" : "bg-surface"}`}>
        <div className={`container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
          <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
            <img src={app.image} alt={app.name} className="w-full h-full object-cover min-h-[400px]" loading="lazy" />
          </div>
          <div className={`flex items-center section-padding ${i % 2 === 1 ? "lg:order-1" : ""}`}>
            <div className="max-w-lg">
              <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4">Application</p>
              <h2 className="heading-section text-foreground mb-6">{app.name}</h2>
              <p className="body-base text-muted-foreground">{app.desc}</p>
            </div>
          </div>
        </div>
      </section>
    ))}
  </div>
);

export default Applications;
