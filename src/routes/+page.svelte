<script>
  import './styles.css'
  import IcRoundCake from '~icons/ic/round-cake';
  import IcSharpLocationOn from '~icons/ic/sharp-location-on';

  import IcRoundPerson from '~icons/ic/round-person';
  import IcRoundApps from '~icons/ic/round-apps';
  import IcRoundBook from '~icons/ic/round-book';
  import IcRoundAddchart from '~icons/ic/round-addchart';
  import IcRoundGamepad from '~icons/ic/round-gamepad';
  import IcBaselineDesignServices from '~icons/ic/baseline-design-services';
  import IcRoundStar from '~icons/ic/round-star';
  import IcRoundStarBorder from '~icons/ic/round-star-border';
  import IcRoundCodeOff from '~icons/ic/round-code-off';
  import IcRoundMemory from '~icons/ic/round-memory';

  import SkillIconsFigmaDark from '~icons/skill-icons/figma-dark';
  import SkillIconsIllustrator from '~icons/skill-icons/illustrator';
  import SkillIconsPhotoshop from '~icons/skill-icons/photoshop';
  import SkillIconsAftereffects from '~icons/skill-icons/aftereffects';

  import SkillIconsVscodeDark from '~icons/skill-icons/vscode-dark';
  import SkillIconsMongodb from '~icons/skill-icons/mongodb';
  import SkillIconsNodejsDark from '~icons/skill-icons/nodejs-dark';
  import SkillIconsAngularDark from '~icons/skill-icons/angular-dark';
  import SkillIconsJavaDark from '~icons/skill-icons/java-dark';
  import SkillIconsJavascript from '~icons/skill-icons/javascript';
  import SkillIconsTypescript from '~icons/skill-icons/typescript';
  import SkillIconsPythonDark from '~icons/skill-icons/python-dark';
  import SkillIconsGit from '~icons/skill-icons/git';
  import SkillIconsBootstrap from '~icons/skill-icons/bootstrap';
  import SkillIconsHtml from '~icons/skill-icons/html';
  import SkillIconsCss from '~icons/skill-icons/css';
  import SkillIconsFlutterDark from '~icons/skill-icons/flutter-dark';
  import SkillIconsReactDark from '~icons/skill-icons/react-dark';
  import SkillIconsC from '~icons/skill-icons/c';
  import SkillIconsCs from '~icons/skill-icons/cs';

  import SkillIconsTerraformDark from '~icons/skill-icons/terraform-dark';
  import SkillIconsAwsDark from '~icons/skill-icons/aws-dark';
  import SkillIconsDocker from '~icons/skill-icons/docker';
  import SkillIconsKubernetes from '~icons/skill-icons/kubernetes';
  import SkillIconsGcpDark from '~icons/skill-icons/gcp-dark';
  import SkillIconsBitbucketDark from '~icons/skill-icons/bitbucket-dark';
  import SkillIconsLinuxDark from '~icons/skill-icons/linux-dark';
  import SkillIconsWindowsDark from '~icons/skill-icons/windows-dark';
  import SkillIconsPowershellDark from '~icons/skill-icons/powershell-dark';
  import SkillIconsPostman from '~icons/skill-icons/postman';
  import SkillIconsRedisDark from '~icons/skill-icons/redis-dark';
  import SkillIconsCloudflareDark from '~icons/skill-icons/cloudflare-dark';
  import SkillIconsVimDark from '~icons/skill-icons/vim-dark';

  import awsBadge from "$lib/assets/badge-aws-cloud-practitioner.png";
  import acronisBadge from "$lib/assets/badge-acronis-cloud-tech-fundamentals.png";
  import saltBadge from "$lib/assets/badge-salt-security.png";
  import zertoBadge1 from "$lib/assets/badge-zerto-certified-associate.png";
  import zertoBadge2 from "$lib/assets/badge-zerto-enterprise-engineer.png";
  import csharpBasicsBadge from "$lib/assets/badge-csharp-basics.jpg";

  import Accordion from './Accordion.svelte';

  import IcBaselineSportsHandball from '~icons/ic/baseline-sports-handball';
  import IcBaselineDirectionsBike from '~icons/ic/baseline-directions-bike';
  import IcRoundMenuBook from '~icons/ic/round-menu-book';
  import IcRoundAccessibilityNew from '~icons/ic/round-accessibility-new';
  import IcRoundSportsEsports from '~icons/ic/round-sports-esports';
  import IcBaselineRadio from '~icons/ic/baseline-radio';
  import IcBaselineWork from '~icons/ic/baseline-work';

  import profilePicture from "$lib/assets/me.jpg";

  const birthDate = new Date('1997-11-12');
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
</script>

<div class="content-wrapper">
  <nav>
    <a class="btn-algolia-1" href="#about"><IcRoundPerson /><span class="tooltip">About Me</span></a>
    <a class="btn-algolia-1" href="#skills"><IcRoundApps /><span class="tooltip">Skills</span></a>
    <a class="btn-algolia-1" href="#certifications"><IcRoundBook /><span class="tooltip">Certifications</span></a>
    <a class="btn-algolia-1" href="#experience"><IcRoundAddchart /><span class="tooltip">Experience</span></a>
    <a class="btn-algolia-1" href="#hobbies"><IcRoundGamepad /><span class="tooltip">Hobbies</span></a>
  </nav>
  
  <div class="about-wrapper">
    <div class="name-title">
      <p class="terminal-text"><span class="terminal-dir">~/iamr0x0t # </span>whoami<span class="blinking-cursor">_</span></p>
      <div class="caret"></div>
      <h3><strong><span class="highlighted-word">Nic</span></strong>olaas Johannes Roodt Brümmer</h3>
      <div class="role-text">
        <p>Designer</p>
        <p><strong>⫸</strong></p>
        <p>Developer</p>
        <p><strong>⫸</strong></p>
        <p><strong><span class="highlighted-word">DevOps</span></strong></p>
      </div>
      <div class="personal">
        <p id="age"><IcRoundCake /> {age}</p>
        <p><IcSharpLocationOn /> Centurion</p>
        <p><IcBaselineWork /> Full-time</p>
      </div>
    </div>

    <div class="picture-wrapper">
      <img src={profilePicture} alt="A picture of me">
      <div class="gradient-edges"></div>
    </div>
  </div>

  <div class="about-content">
    <div class="overflow-top"></div>
    <h1 id="about">About Me</h1>
    <p>
      Welcome to my resume.<br><br>
      Graphic and web designer turned Full Stack Developer turned DevOps Engineer with a passion for
      building with technology and automation. I often spend my time reading on daily.dev, taking my bike for
      a ride, lifting weights, rock climbing, playing the occasional video game, or learning something new
      in the tech space.<br><br>
      I started out as a freelance graphic designer. I later applied at WeThinkCode_ where I attained a higher
      certificate as a full-stack developer. I did an internship at BBD as a frontend developer and worked for
      Elements.Cloud as a backend developer. I later moved into the cloud space at +OneX where I am
      currently working as a DevOps Engineer with both private and public cloud platforms.<br><br>
      I believe the experiences I've described below have given me a diverse skill set in various professions with which I can add value and offer insights.<br><br>
      I operate very well in an environment where there is: mutual respect, knowledge sharing, teamwork, constructive criticism, well structured processes and a good sense of humour.
    </p>
    <h1 id="skills">Skills</h1>
    <p>1 <IcRoundStar/> I haven't touched this in ages.<br>
      2 <IcRoundStar/> I've had some exposure.<br>
      3 <IcRoundStar/> I've used this in a few projects.<br>
      4 <IcRoundStar/> I've used this in <strong>many</strong> projects.<br>
      5 <IcRoundStar/> I use this every day. </p>
      <p>Use <span class="tip-shortcut">shift + scroll</span> or <span class="tip-shortcut">swipe left/right</span> with 2 fingers to move horizontally.</p>
    <h2><IcBaselineDesignServices /> Designer</h2>
    <div class="skills-wrapper">
      <div class="skill-tile">
        <h3>Figma</h3>
        <h3><SkillIconsFigmaDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Illustrator</h3>
        <h3><SkillIconsIllustrator /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Photoshop</h3>
        <h3><SkillIconsPhotoshop /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>After Effects</h3>
        <h3><SkillIconsAftereffects /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
    </div>

    <h2><IcRoundCodeOff /> Developer</h2>
    <div class="skills-wrapper">
      <div class="skill-tile">
        <h3>VS Code</h3>
        <h3><SkillIconsVscodeDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>MongoDB</h3>
        <h3><SkillIconsMongodb /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Node.JS</h3>
        <h3><SkillIconsNodejsDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Angular</h3>
        <h3><SkillIconsAngularDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Java</h3>
        <h3><SkillIconsJavaDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>JavaScript</h3>
        <h3><SkillIconsJavascript /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>TypeScript</h3>
        <h3><SkillIconsTypescript /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Python</h3>
        <h3><SkillIconsPythonDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Git</h3>
        <h3><SkillIconsGit /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Bootstrap</h3>
        <h3><SkillIconsBootstrap /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>HTML</h3>
        <h3><SkillIconsHtml /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>CSS</h3>
        <h3><SkillIconsCss /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Flutter</h3>
        <h3><SkillIconsFlutterDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>React</h3>
        <h3><SkillIconsReactDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>C</h3>
        <h3><SkillIconsC /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>C#</h3>
        <h3><SkillIconsCs /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
    </div>
    
    <h2><IcRoundMemory /> DevOps</h2>
    <div class="skills-wrapper">
      <div class="skill-tile">
        <h3>Docker</h3>
        <h3><SkillIconsDocker /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Terraform</h3>
        <h3><SkillIconsTerraformDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>AWS</h3>
        <h3><SkillIconsAwsDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Kubernetes</h3>
        <h3><SkillIconsKubernetes /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>GCP</h3>
        <h3><SkillIconsGcpDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>BitBucket</h3>
        <h3><SkillIconsBitbucketDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Linux (WSL)</h3>
        <h3><SkillIconsLinuxDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Windows</h3>
        <h3><SkillIconsWindowsDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>PowerShell</h3>
        <h3><SkillIconsPowershellDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Postman</h3>
        <h3><SkillIconsPostman /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Redis</h3>
        <h3><SkillIconsRedisDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>CloudFlare</h3>
        <h3><SkillIconsCloudflareDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
      <div class="skill-tile">
        <h3>Vim</h3>
        <h3><SkillIconsVimDark /></h3>
        <div class="stars">
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStar/></p>
          <p><IcRoundStarBorder/></p>
        </div>
      </div>
    </div>
  <h1 id="certifications">Certifications</h1>
  <div class="certs-wrapper">
    <div class="cert-tile">
      <img src={awsBadge} alt="badge-aws-cloud-practitioner" class="cert-img">
      <p>AWS Certified Cloud Practitioner</p>
      <a href="https://www.credly.com/badges/40e48554-1da7-4a30-8841-202f132d4386" target="blank">Source</a>
    </div>
    <div class="cert-tile">
      <img src={saltBadge} alt="badge-salt-security-api" class="cert-img">
      <p>Salt Security API Threat Hunter</p>
      <a href="https://www.credly.com/badges/df5afe08-3f7e-4a7f-99dd-9cf18ee86ac4" target="blank">Source</a>
    </div>
    <div class="cert-tile">
      <img src={acronisBadge} alt="badge-acronis-cloud-tech-fundamentals" class="cert-img">
      <p>Acronis Cloud Tech Fundamentals</p>
      <a href="https://www.credly.com/badges/6430be4b-91f2-447e-a1b0-706324c71661" target="blank">Source</a>
    </div>
    <div class="cert-tile">
      <img src={zertoBadge1} alt="badge-zerto-certified-associate" class="cert-img">
      <p>Zerto Certified Associate</p>
      <a href="https://www.credly.com/badges/a2cc2ff6-3b7c-4fac-a9e4-5d1381ea8f85" target="blank">Source</a>
    </div>
    <div class="cert-tile">
      <img src={zertoBadge2} alt="badge-zerto-enterprise-engineer" class="cert-img">
      <p>Zerto Certified Professional Enterprise Engineer</p>
      <a href="https://www.credly.com/badges/c4e80c1f-b651-4f1b-91ad-233dfb5f10e7" target="blank">Source</a>
    </div>
    <div class="cert-tile">
      <img src={csharpBasicsBadge} alt="badge-csharp-basics" class="cert-img">
      <p>C# Basics for Beginners</p>
      <a href="https://ude.my/UC-0bf98713-cc21-4643-879e-e036afd9fcee" target="blank">Source</a>
    </div>
  </div>
  <h1 id="experience">Experience</h1>
  <Accordion>
    <span slot="head">Centurion Academy / Freelance</span>
    <div slot="details">
      <p>
        Profession: Design (junior - professional)
      </p>
      <p>2018 - 2020</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>CorelDraw</li>
        <li>Adobe Animate</li>
        <li>Adobe Dreamweaver</li>
        <li>Adobe InDesign</li>
        <li>Adobe Illustrator</li>
        <li>Adobe Photoshop</li>
      </ul>
      <p>I started my studies into graphic and web design during this period where I was exposed to the fundamentals of visual design and frontend development. After attaining my degree, I went on to design new sports apparel for Momentum Health Sports Club and Warrior Sports Academy as a freelancer.</p>
    </div>
  </Accordion>
  <Accordion>
    <span slot="head">WeThinkCode_ / BBD</span>
    <div slot="details">
      <p>
        Profession: Fullstack Development (junior)
      </p>
      <p>2020 - 2022</p>
      <ul>
        <li>C</li>
        <li>Java</li>
        <li>Python</li>
        <li>Angular</li>
        <li>Node.JS</li>
        <li>Git</li>
        <li>Jira</li>
      </ul>
      <p>I applied into the WeThinkCode_ program in Johannesburg to begin my journey into coding. This involved 2 years of 8 to 10 months of practical learning in development followed by 2 to 4 months of hands-on experience at one of the sponsor companies as an intern. I applied to BBD, a software dev house company, for my first internship where I worked as a junior frontend developer and was placed on the Standard Bank mobile website where customers can purchase mobile SIMs and data. This was a tough but valuable experience, because it was my first exposure to a highly opinionated frontend JavaScript framework in production use.</p>
    </div>
  </Accordion>
  <Accordion>
    <span slot="head">WeThinkCode_ / +OneX / Elements.Cloud</span>
    <div slot="details">
      <p>
        Profession: Backend Development (junior)
      </p>
      <p>2022-04 - 2022-12</p>
      <ul>
        <li>Vanilla JavaScript</li>
        <li>Node.JS</li>
        <li>MongoDB</li>
        <li>AWS</li>
        <li>Salesforce</li>
        <li>Git</li>
        <li>Jira</li>
      </ul>
      <p>
        For my second and final internship I was placed at +OneX, a private cloud and managed services company. I was outsourced as a junior backend developer to Elements.Cloud and worked on the Elements.Cloud website where customers can sync and draw dependencies between their Salesforce organization objects. I worked with a very senior and proficient team.
      </p>
    </div>
  </Accordion>
  <Accordion>
    <span slot="head">+OneX / Cloud</span>
    <div slot="details">
      <p>
        Profession: Cloud Engineer (junior - intermediate)
      </p>
      <p>2023-01 - Current</p>
      <ul>
        <li>AWS</li>
        <li>Acronis</li>
        <li>Veeam</li>
        <li>VMWare</li>
        <li>Zerto</li>
        <li>4me</li>
        <li>Terraform</li>
        <li>PowerShell</li>
        <li>Python</li>
        <li>BitBucket</li>
        <li>GitHub</li>
        <li>Git</li>
      </ul>
      <p>
        I was later absorbed into the cloud team. I started working with private cloud technologies and occasionally was also fortunate to do some design work, but my focus and efforts are more committed to our AWS clients namely KIA, XDS, CBI, TTRO and Reutech Communications. My tasks involved the implementation of the well-architected framework ensuring cost optimization, security, operational excellence, reliability, performance efficiency and sustainability. From a practical perspective this involved working closely with dev teams, deploying container workloads into AWS ECS with Terraform, autoscaling containers and instances, migrating workloads between accounts, architecting and building cloud solutions (EC2, ECR, ECS, ALB, RDS, ElastiCache, Backups, Governance), resolving billing issues, writing scripts with the AWS SDK, and maintaining the AWS environments.
      </p>
    </div>
  </Accordion>
  <h1 id="hobbies">Hobbies</h1>
  <div class="hobbies-wrapper">
    <div class="hobbies-tile">
      <p class="hobbies-icon"><IcBaselineSportsHandball /></p>
      <p>Climbing</p>
    </div>
    <div class="hobbies-tile">
      <p class="hobbies-icon"><IcRoundSportsEsports /></p>
      <p>Gaming</p>
    </div>
    <div class="hobbies-tile">
      <p class="hobbies-icon"><IcRoundAccessibilityNew /></p>
      <p>Weights</p>
    </div>
    <div class="hobbies-tile">
      <p class="hobbies-icon"><IcRoundMenuBook /></p>
      <p>Reading</p>
    </div>
    <div class="hobbies-tile">
      <p class="hobbies-icon"><IcBaselineDirectionsBike /></p>
      <p>Cruising</p>
    </div>
    <div class="hobbies-tile">
      <p class="hobbies-icon"><IcBaselineRadio /></p>
      <p>Music</p>
    </div>
  </div>
  <div class="overflow-bottom"></div>  
</div>
</div>
<div class="background-gradient">
  <div class="background-gradient-cover"></div>
</div>
<div class="background-gradient-l">
  <div class="background-gradient-cover-l"></div>
</div>