import { useEffect, useRef } from "react";

function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let animationFrame;

    const mouse = {
      x: 0,
      y: 0
    };

    const particles = [];
    const PARTICLE_COUNT = 520;

    const colors = [
      "#00d9ff",
      "#28a9ff",
      "#ffffff",
      "#9b6cff",
      "#ff7138",
      "#00d9a5",
      "#36c9ff"
    ];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticle() {
      const depth = Math.random();

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z: depth,
        size:
          depth > 0.75
            ? Math.random() * 2.8 + 1
            : Math.random() * 1.7 + 0.4,
        speedX: (Math.random() - 0.5) * 0.20,
        speedY: (Math.random() - 0.5) * 0.20,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.025 + 0.008,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: Math.random() > 0.72 ? "square" : "dot"
      };
    }

    function initializeParticles() {
      particles.length = 0;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(createParticle());
      }
    }

    function drawParticle(particle, time) {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < -20) particle.x = width + 20;
      if (particle.x > width + 20) particle.x = -20;

      if (particle.y < -20) particle.y = height + 20;
      if (particle.y > height + 20) particle.y = -20;

      particle.twinkle += particle.twinkleSpeed;

      const opacity =
        0.20 +
        (Math.sin(particle.twinkle + time * 0.0003) + 1) * 0.30;

      const parallaxX = mouse.x * particle.z * 10;
      const parallaxY = mouse.y * particle.z * 7;

      const x = particle.x + parallaxX;
      const y = particle.y + parallaxY;

      ctx.globalAlpha = opacity;
      ctx.fillStyle = particle.color;

      if (particle.shape === "square") {
        ctx.fillRect(
          x,
          y,
          particle.size * 1.8,
          particle.size * 1.8
        );
      } else {
        ctx.beginPath();
        ctx.arc(
          x,
          y,
          particle.size,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }

    function project3D(x, y, z, centerX, centerY, scale) {
      const camera = 650;
      const perspective = camera / (camera + z);

      return {
        x: centerX + x * perspective * scale,
        y: centerY + y * perspective * scale,
        perspective
      };
    }

    function rotatePoint(point, ax, ay, az) {
      let { x, y, z } = point;

      const cosX = Math.cos(ax);
      const sinX = Math.sin(ax);

      let y1 = y * cosX - z * sinX;
      let z1 = y * sinX + z * cosX;

      y = y1;
      z = z1;

      const cosY = Math.cos(ay);
      const sinY = Math.sin(ay);

      let x1 = x * cosY + z * sinY;
      z1 = -x * sinY + z * cosY;

      x = x1;
      z = z1;

      const cosZ = Math.cos(az);
      const sinZ = Math.sin(az);

      x1 = x * cosZ - y * sinZ;
      y1 = x * sinZ + y * cosZ;

      return {
        x: x1,
        y: y1,
        z
      };
    }

    /* -----------------------------------------------
       WIRE SPHERE
    ------------------------------------------------ */

    function drawWireSphere(time) {
      const centerX = width * 0.34;
      const centerY = height * 0.28;

      const radius = Math.min(width, height) * 0.095;

      ctx.save();

      ctx.lineWidth = 0.6;
      ctx.strokeStyle = "rgba(55, 100, 180, 0.20)";

      const rotation = time * 0.00018;

      for (let latitude = -4; latitude <= 4; latitude++) {
        const phi = (latitude / 4) * (Math.PI / 2);

        ctx.beginPath();

        for (let longitude = 0; longitude <= 40; longitude++) {
          const theta =
            (longitude / 40) * Math.PI * 2;

          let point = {
            x:
              radius *
              Math.cos(phi) *
              Math.cos(theta),
            y:
              radius *
              Math.sin(phi),
            z:
              radius *
              Math.cos(phi) *
              Math.sin(theta)
          };

          point = rotatePoint(
            point,
            0.3,
            rotation,
            0
          );

          const projected = project3D(
            point.x,
            point.y,
            point.z,
            centerX,
            centerY,
            1
          );

          if (longitude === 0) {
            ctx.moveTo(projected.x, projected.y);
          } else {
            ctx.lineTo(projected.x, projected.y);
          }
        }

        ctx.stroke();
      }

      for (let longitude = 0; longitude < 12; longitude++) {
        const theta =
          (longitude / 12) * Math.PI * 2;

        ctx.beginPath();

        for (let latitude = -20; latitude <= 20; latitude++) {
          const phi =
            (latitude / 20) * (Math.PI / 2);

          let point = {
            x:
              radius *
              Math.cos(phi) *
              Math.cos(theta),
            y:
              radius *
              Math.sin(phi),
            z:
              radius *
              Math.cos(phi) *
              Math.sin(theta)
          };

          point = rotatePoint(
            point,
            0.3,
            rotation,
            0
          );

          const projected = project3D(
            point.x,
            point.y,
            point.z,
            centerX,
            centerY,
            1
          );

          if (latitude === -20) {
            ctx.moveTo(projected.x, projected.y);
          } else {
            ctx.lineTo(projected.x, projected.y);
          }
        }

        ctx.stroke();
      }

      ctx.restore();
    }

    /* -----------------------------------------------
       LARGE 3D SPIRAL / ENGINEERING FORM
    ------------------------------------------------ */

    function drawSpiralObject(time) {
      const centerX = width * 0.70;
      const centerY = height * 0.53;

      const rotationY = time * 0.00028;
      const rotationX = 0.55 + Math.sin(time * 0.00025) * 0.18;
      const rotationZ = Math.sin(time * 0.00018) * 0.25;

      const points = [];

      const turns = 5.2;
      const segments = 520;

      for (let i = 0; i < segments; i++) {
        const t = i / (segments - 1);

        const angle = t * Math.PI * 2 * turns;

        const radius =
          18 +
          Math.sin(t * Math.PI) * 105;

        const vertical =
          (t - 0.5) * 260;

        const wobble =
          Math.sin(angle * 2.3) * 12;

        let x =
          Math.cos(angle) *
          (radius + wobble);

        let y = vertical;

        let z =
          Math.sin(angle) *
          (radius + wobble);

        /* secondary twist */

        x +=
          Math.sin(angle * 0.5) * 25;

        z +=
          Math.cos(angle * 0.7) * 20;

        const rotated = rotatePoint(
          { x, y, z },
          rotationX,
          rotationY,
          rotationZ
        );

        const projected = project3D(
          rotated.x,
          rotated.y,
          rotated.z,
          centerX,
          centerY,
          1
        );

        points.push({
          ...projected,
          z: rotated.z
        });
      }

      ctx.save();

      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1];
        const b = points[i];

        const depth =
          Math.max(
            0.05,
            Math.min(1, (b.z + 250) / 500)
          );

        ctx.beginPath();

        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);

        ctx.lineWidth =
          0.45 + depth * 0.65;

        ctx.strokeStyle =
          `rgba(0, ${150 + Math.floor(depth * 90)}, 255, ${0.10 + depth * 0.20})`;

        ctx.stroke();
      }

      /* cross connecting lines */

      for (let i = 0; i < points.length - 12; i += 12) {
        const a = points[i];
        const b = points[i + 12];

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);

        ctx.lineWidth = 0.35;
        ctx.strokeStyle =
          "rgba(0, 170, 255, 0.10)";

        ctx.stroke();
      }

      ctx.restore();
    }

    /* -----------------------------------------------
       SECOND SMALLER TECHNICAL OBJECT
    ------------------------------------------------ */

    function drawSmallTechnicalObject(time) {
      const centerX = width * 0.31;
      const centerY = height * 0.60;

      const scale = 0.55;

      ctx.save();

      for (let ring = 0; ring < 7; ring++) {
        const radius =
          (20 + ring * 12) * scale;

        ctx.beginPath();

        for (let i = 0; i <= 60; i++) {
          const angle =
            (i / 60) * Math.PI * 2;

          const wave =
            Math.sin(
              angle * 3 +
              time * 0.001 +
              ring
            ) * 4;

          const x =
            centerX +
            Math.cos(angle) *
              (radius + wave);

          const y =
            centerY +
            Math.sin(angle) *
              (radius * 0.42 + wave);

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle =
          "rgba(20, 150, 255, 0.10)";

        ctx.lineWidth = 0.5;

        ctx.stroke();
      }

      ctx.restore();
    }

    /* -----------------------------------------------
       AMBIENT GLOW
    ------------------------------------------------ */

    function drawGlow(time) {
      const pulse =
        0.85 +
        Math.sin(time * 0.00035) * 0.12;

      const gradient =
        ctx.createRadialGradient(
          width * 0.52,
          height * 0.48,
          0,
          width * 0.52,
          height * 0.48,
          width * 0.55
        );

      gradient.addColorStop(
        0,
        `rgba(0, 170, 255, ${0.07 * pulse})`
      );

      gradient.addColorStop(
        0.35,
        `rgba(0, 100, 200, ${0.035 * pulse})`
      );

      gradient.addColorStop(
        1,
        "rgba(0, 0, 0, 0)"
      );

      ctx.fillStyle = gradient;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );
    }

    function animate(time) {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      /* deep background */

      const background =
        ctx.createLinearGradient(
          0,
          0,
          width,
          height
        );

      background.addColorStop(
        0,
        "#061827"
      );

      background.addColorStop(
        0.45,
        "#030b18"
      );

      background.addColorStop(
        1,
        "#020713"
      );

      ctx.fillStyle = background;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      drawGlow(time);

      /* subtle grid */

      ctx.strokeStyle =
        "rgba(0, 170, 220, 0.055)";

      ctx.lineWidth = 0.5;

      const gridSize = 75;

      for (
        let x = 0;
        x < width;
        x += gridSize
      ) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (
        let y = 0;
        y < height;
        y += gridSize
      ) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      /* particles */

      for (const particle of particles) {
        drawParticle(
          particle,
          time
        );
      }

      ctx.globalAlpha = 1;

      /* technical forms */

      drawWireSphere(time);

      drawSmallTechnicalObject(time);

      drawSpiralObject(time);

      /* vignette */

      const vignette =
        ctx.createRadialGradient(
          width / 2,
          height / 2,
          height * 0.15,
          width / 2,
          height / 2,
          height * 0.80
        );

      vignette.addColorStop(
        0,
        "rgba(0,0,0,0)"
      );

      vignette.addColorStop(
        1,
        "rgba(0,4,12,0.60)"
      );

      ctx.fillStyle = vignette;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      animationFrame =
        requestAnimationFrame(animate);
    }

    function handleMouseMove(event) {
      mouse.x =
        (event.clientX / width - 0.5);

      mouse.y =
        (event.clientY / height - 0.5);
    }

    resize();
    initializeParticles();

    window.addEventListener(
      "resize",
      () => {
        resize();
        initializeParticles();
      }
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-live-canvas"
    />
  );
}

export default HeroBackground;