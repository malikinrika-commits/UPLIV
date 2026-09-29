import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  category: 'People' | 'Technology' | 'Data' | 'AI' | 'Cloud' | 'Business';
  color: string;
}

export const TechnologyNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 800;
      height = canvas.height = canvas.parentElement?.clientHeight || 500;
    };

    window.addEventListener('resize', handleResize);

    const labels: { label: string; category: Node['category']; color: string }[] = [
      { label: 'Technology Talent', category: 'People', color: '#08A9E8' },
      { label: 'Cloud Architecture', category: 'Cloud', color: '#087FC1' },
      { label: 'Enterprise AI', category: 'AI', color: '#72C8F0' },
      { label: 'Data Pipelines', category: 'Data', color: '#079FE8' },
      { label: 'IT Consulting', category: 'Business', color: '#0B2145' },
      { label: 'Project Delivery', category: 'Technology', color: '#72C8F0' },
      { label: 'Full-Stack Pods', category: 'People', color: '#08A9E8' },
      { label: 'DevOps & K8s', category: 'Technology', color: '#087FC1' },
      { label: 'Machine Learning', category: 'AI', color: '#0B2145' },
      { label: 'Snowflake / BigQuery', category: 'Data', color: '#079FE8' },
      { label: 'Digital Modernization', category: 'Business', color: '#C6E8F8' },
      { label: 'U.S. Enterprise', category: 'Business', color: '#08A9E8' }
    ];

    const nodes: Node[] = labels.map((item, i) => {
      const angle = (i / labels.length) * Math.PI * 2;
      const distance = Math.min(width, height) * 0.3 + (Math.random() * 60 - 30);
      return {
        x: width / 2 + Math.cos(angle) * distance,
        y: height / 2 + Math.sin(angle) * distance * 0.7,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: item.category === 'AI' || item.category === 'People' ? 5.5 : 4.5,
        label: item.label,
        category: item.category,
        color: item.color
      };
    });

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouse = { x: -1000, y: -1000 };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(8, 127, 193, 0.08)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.min(width, height) * 0.45;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            ctx.strokeStyle = `rgba(8, 169, 232, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            if ((tick + i * 17) % 180 < 40) {
              const progress = ((tick + i * 17) % 180) / 40;
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * progress;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * progress;
              ctx.fillStyle = '#08A9E8';
              ctx.beginPath();
              ctx.arc(px, py, 1.8, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      const labelRects: { left: number; right: number; top: number; bottom: number }[] = [
        { left: width - 350, right: width - 8, top: height - 42, bottom: height - 5 }
      ];
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        const pad = 40;
        if (node.x < pad || node.x > width - pad) node.vx *= -1;
        if (node.y < pad || node.y > height - pad) node.vy *= -1;

        const mdx = mouse.x - node.x;
        const mdy = mouse.y - node.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 120 && mdist > 0) {
          node.x -= (mdx / mdist) * 0.8;
          node.y -= (mdy / mdist) * 0.8;
        }

        const glowGrad = ctx.createRadialGradient(
          node.x,
          node.y,
          node.radius * 0.5,
          node.x,
          node.y,
          node.radius * 3.5
        );
        glowGrad.addColorStop(0, `${node.color}55`);
        glowGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = '500 11px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = 'rgba(66, 97, 127, 0.95)';
        const labelWidth = ctx.measureText(node.label).width;
        const labelOptions: { x: number; y: number; align: CanvasTextAlign }[] = [
          { x: node.x, y: node.y + node.radius + 15, align: 'center' },
          { x: node.x, y: node.y - node.radius - 6, align: 'center' },
          { x: node.x - node.radius - 8, y: node.y + 4, align: 'right' },
          { x: node.x + node.radius + 8, y: node.y + 4, align: 'left' }
        ];
        const labelPosition = labelOptions.find(({ x, y, align }) => {
          const left = align === 'center' ? x - labelWidth / 2 : align === 'right' ? x - labelWidth : x;
          const right = left + labelWidth;
          const top = y - 11;
          const bottom = y + 3;
          const insideCanvas = left >= 4 && right <= width - 4 && top >= 4 && bottom <= height - 4;
          const clearOfLabels = labelRects.every((rect) =>
            right + 5 < rect.left || left - 5 > rect.right || bottom + 3 < rect.top || top - 3 > rect.bottom
          );
          return insideCanvas && clearOfLabels;
        }) || labelOptions[0];
        const labelLeft = labelPosition.align === 'center'
          ? labelPosition.x - labelWidth / 2
          : labelPosition.align === 'right'
            ? labelPosition.x - labelWidth
            : labelPosition.x;
        labelRects.push({
          left: labelLeft,
          right: labelLeft + labelWidth,
          top: labelPosition.y - 11,
          bottom: labelPosition.y + 3
        });
        ctx.textAlign = labelPosition.align;
        ctx.fillText(node.label, labelPosition.x, labelPosition.y);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[460px] flex items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair"
      />
      <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Connected U.S. Technology Ecosystem</span>
      </div>
      <div className="absolute bottom-4 right-4 text-[11px] text-slate-500 font-mono tracking-wider bg-slate-900/90 px-2 py-1 rounded-md">
        PEOPLE · DATA · AI · CLOUD · DELIVERY
      </div>
    </div>
  );
};
