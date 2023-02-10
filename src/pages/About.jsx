import React from "react";
import Navbar from "../components/Navbar";

export default function About(){
    return (
      <>
        <Navbar />
        <hr />
        <h1>Haqqında</h1>
        <p>
          Bu vebsayt “Ağıllı Ayaqqabılar” layihəsi üçün yaradılmışdır.
          Məqsədimiz görmə məhdudiyyətli insanlara kömək etmək və mövcud
          layihələri təkmilləşdirməkdir. Biz yaxınlıqdakı obyektləri aşkar edən
          və mexanizmin istifadəçisinə siqnal göndərən mexanizm yaratdıq.
          Mexanizm yaradılarkən özəlləşdirmə başlıca diqqət mərkəzlərindən biri
          olduğundan bizim mexanizmin siqnal mexanizmi də istəyə bağlı olaraq
          dəyişdirilə bilir. Siz səsli və ya titrəmə mühərrikli və ya hər ikisi
          ilə siqnal qəbul edə bilərsiniz. Bizim proyektə oxşar proyektlər daha
          öncə yaradılmışdır, lakin bu proyektlərin gündəlik istifadə üçün
          kifayət etmədiyini düşündük, bu səbəbdən funksiyalar əlavə edərək və
          problemlərin aradan qaldırılması ilə bu layihələri təkmilləşdirmək
          istədik. Mexanizm istəyə bağlı olaraq çubuq və ayaqqabı ilə istifadə
          edilə bilər. Amma biz onu ayaqqabı ilə istifadə etməyi təklif edirik.
          Layihəmizi yaymaq və görmə qabiliyyəti zəif olan insanlara başqa
          yollarla da kömək etmək üçün hal-hazırda istifadə etdiyiniz bu
          proqramı da yaratdıq. Bu proqramla görmə qabiliyyəti zəif olan şəxsin
          ailə üzvləri həmin şəxsin lokasiyasını öyrənə bilər. Görmə qabiliyyəti
          zəif olan şəxs ailə üzvlərini/dostlarını əlavə edə/silə bilər. Biz
          tətbiqin məxfiliyini, təhlükəsizliyini və sürətini bacardığımız qədər
          yüksək tutmağa çalışırıq.
        </p>
        <p>
          - Cihazı test etmək üçün onlayn simulyasiyanı açın: <span> </span>
          <a
            href="https://wokwi.com/projects/355939825123970049"
            target="_blank"
          >
            Onlayn Simulyasiya
          </a>
          <br />- Proyekt haqqında olan slaydı yükləyin: <span> </span>
          <a
            href="https://smart-shoes-slides.netlify.app/slayd.pdf"
            target="_blank"
          >
            PDF/
          </a>
          <a
            href="https://smart-shoes-slides.netlify.app/slayd.odp"
            target="_blank"
          >
            ODP
          </a>
          <br />- Siz həmçinin slaydları brauzeriniz üzərindən onlayn olaraq
          görüntüləyə bilərsiniz: <span> </span>
          <a
            href="https://smart-shoes-slides.netlify.app/slayd.html"
            target="_blank"
          >
            Brauzerdə aç
          </a>
        </p>
        <br />
        <hr />
        <h1>Video</h1>
        <hr />
        <br />
        <video width="80%" controls>
          <source src="../../images/smart-shoes.mp4" type="video/mp4"/>
          Brauzeriniz mp4 formatını dəstəkləmir.
        </video>
        <br />
        <hr />
        <h1>Şəkillər</h1>
        <hr />
        <br />
        <div>
          <h3>Qurğu</h3>
          <br />
          <ul>
            <li>
              <label>Qurğunun ayaqqabı üzərindəki şəkili</label>
              <br />
              <br />
              <img
                width={300}
                src="/images/gercek.jpg"
                alt="Real Photo of mechanism"
              />
            </li>
            <br />
            <li>
              <label>Qurğunun ayaqqabı üzərindəki şəkili - 2</label>
              <br />
              <br />
              <img
                width={300}
                src="/images/gercek-2.jpg"
                alt="Real Photo of mechanism 2"
              />
            </li>
            <br />
            <li>
              <label>Simulyasiyadan ekran görüntüsü</label>
              <br />
              <br />
              <img
                width={300}
                src="/images/simulation.png"
                alt="Screenshot from simulation"
              />
            </li>
          </ul>
          <br />
          <hr />
          <br />
          <h3>Qurğunun daxili hissələri</h3>
          <br />
          <ul>
            <li>
              <label>Arduino Uno</label>
              <br />
              <br />
              <img width={300} src="/images/uno.png" alt="Arduino Uno" />
            </li>
            <br />
            <li>
              <label>Ultrasonic Sensor</label>
              <br />
              <br />
              <img width={300} src="/images/sensor.png" alt="Arduino Uno" />
            </li>
            <br />
            <li>
              <label>Vibration Motor</label>
              <br />
              <br />
              <img width={300} src="/images/vibration.png" alt="Arduino Uno" />
            </li>
            <br />
            <li>
              <label>Buzzer</label>
              <br />
              <br />
              <img width={300} src="/images/buzzer.png" alt="Arduino Uno" />
            </li>
          </ul>
        </div>
        <br />
      </>
    );
}