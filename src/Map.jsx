// without using API you can embed google map free:
// but, it has to have a fixed address..

function Map() {
  return (
    <div className="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.743188368283!2d24.932910577108473!3d60.201532840902296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920991ece823df%3A0xd4b4f30731ef9db7!2sBusiness%20College%20Helsinki!5e0!3m2!1sfi!2sfi!4v1699548822284!5m2!1sfi!2sfi"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
