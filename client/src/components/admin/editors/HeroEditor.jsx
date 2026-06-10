import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { usePortfolio } from '../../../context/PortfolioContext';
import { AdminInput, AdminTextarea, SaveButton, SectionHeader, SuccessToast, useToast } from '../AdminComponents';

const HeroEditor = () => {
  const { authFetch } = useAuth();
  const { portfolio, fetchPortfolio } = usePortfolio();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { toast, showToast } = useToast();

  useEffect(() => {
    if (portfolio?.hero) setForm({ ...portfolio.hero });
  }, [portfolio]);

  const updateField = (field, value) => setForm(prev => ({ ...prev, [field]: value }));
  const updateRoles = (val) => setForm(prev => ({ ...prev, roles: val.split('\n').filter(Boolean) }));
  const updateTechStack = (val) => {
    const parsed = val.split('\n').map(line => {
      const [name, color] = line.split('|').map(s => s.trim());
      return { name, color: color || '#FFFFFF' };
    }).filter(t => t.name);
    setForm(prev => ({ ...prev, techStack: parsed }));
  };
  const updateStats = (val) => {
    const parsed = val.split('\n').map(line => {
      const [number, ...rest] = line.split('|').map(s => s.trim());
      return { number, label: rest.join('|') };
    }).filter(s => s.number);
    setForm(prev => ({ ...prev, stats: parsed }));
  };
  const updateSocialLinks = (val) => {
    const parsed = val.split('\n').map(line => {
      const parts = line.split('|').map(s => s.trim());
      return { name: parts[0], href: parts[1] || '#' };
    }).filter(s => s.name);
    setForm(prev => ({ ...prev, socialLinks: parsed }));
  };

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${API_URL}/api/portfolio/upload?type=image`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${localStorage.getItem('admin_token')}` },
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.url) {
        setForm(prev => ({ ...prev, profilePhoto: data.url }));
        showToast('Profile photo uploaded via Cloudonix!');
      } else {
        showToast(data.message || 'Upload failed. Check Cloudonix API key.');
      }
    } catch {
      showToast('Upload error. Check server connection.');
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await authFetch('/api/portfolio/hero', {
        method: 'PUT',
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        showToast('Hero section saved!');
        fetchPortfolio();
      }
    } catch { showToast('Save failed.'); }
    finally { setLoading(false); }
  };

  if (!form) return <div className="text-gray-500 dark:text-gray-500 text-sm">Loading...</div>;

  return (
    <div>
      <SectionHeader title="Hero / Home Section" subtitle="Portfolio ka main page edit karo" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>} />
      
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Profile Photo */}
        <div className="lg:col-span-2 p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.06]">
          <h3 className="text-gray-900 dark:text-white font-semibold text-sm mb-4">Profile Photo (via Cloudonix)</h3>
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-gray-50 dark:bg-white/[0.03] flex items-center justify-center shrink-0">
              {form.profilePhoto ? (
                <img src={form.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
              )}
            </div>
            <div>
              <label className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-gray-900 dark:text-white font-medium text-sm bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] hover:bg-gray-200 dark:hover:bg-gray-200 dark:bg-white/[0.08] transition-all cursor-pointer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                {uploading ? 'Uploading...' : 'Upload Photo'}
                <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} disabled={uploading} />
              </label>
              <p className="text-gray-600 text-xs mt-2">Cloudonix se cloud pe upload hogi</p>
              {form.profilePhoto && (
                <input type="text" value={form.profilePhoto} onChange={(e) => updateField('profilePhoto', e.target.value)} className="mt-2 w-full text-xs px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] text-gray-600 dark:text-gray-400 focus:outline-none" placeholder="Ya direct URL daalo" />
              )}
            </div>
          </div>
        </div>

        <AdminInput label="Full Name" value={form.name} onChange={(v) => updateField('name', v)} />
        <AdminInput label="Tagline" value={form.tagline} onChange={(v) => updateField('tagline', v)} />
        <AdminInput label="Email" value={form.email} onChange={(v) => updateField('email', v)} type="email" />
        <AdminInput label="Phone" value={form.phone} onChange={(v) => updateField('phone', v)} />
        <AdminInput label="GitHub URL" value={form.githubUrl} onChange={(v) => updateField('githubUrl', v)} />
        <AdminInput label="LinkedIn URL" value={form.linkedinUrl} onChange={(v) => updateField('linkedinUrl', v)} />

        <div className="lg:col-span-2">
          <AdminTextarea label="Description (main bio)" value={form.description} onChange={(v) => updateField('description', v)} rows={3} />
        </div>

        <div>
          <AdminTextarea
            label="Roles (typewriter) — ek role per line"
            value={form.roles?.join('\n') || ''}
            onChange={updateRoles}
            rows={4}
            placeholder={'Full Stack Developer\nMERN Stack Developer\nNPM Contributor'}
          />
        </div>

        <div>
          <AdminTextarea
            label="Stats — format: number|label (one per line)"
            value={form.stats?.map(s => `${s.number}|${s.label}`).join('\n') || ''}
            onChange={updateStats}
            rows={4}
            placeholder={'5+|Projects Deployed\n1+|Years Experience'}
          />
        </div>

        <div>
          <AdminTextarea
            label="Tech Stack — format: name|color (one per line)"
            value={form.techStack?.map(t => `${t.name}|${t.color}`).join('\n') || ''}
            onChange={updateTechStack}
            rows={5}
            placeholder={'React|#61DAFB\nNode.js|#68A063'}
          />
        </div>

        <div>
          <AdminTextarea
            label="Social Links — format: name|url (one per line)"
            value={form.socialLinks?.map(s => `${s.name}|${s.href}`).join('\n') || ''}
            onChange={updateSocialLinks}
            rows={5}
            placeholder={'GitHub|https://github.com/Shivam-75\nLinkedIn|https://linkedin.com/in/...'}
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <SaveButton onClick={handleSave} loading={loading} />
      </div>
      {toast && <SuccessToast message={toast} onClose={() => {}} />}
    </div>
  );
};

export default HeroEditor;
