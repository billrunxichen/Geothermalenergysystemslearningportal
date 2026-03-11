import { motion } from 'motion/react';
import { useState } from 'react';
import { Users, Mail, Globe, Calendar, Target, Home, Building2 } from 'lucide-react';

export function CommunityEngagement() {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);

  const engagementChannels = [
    {
      id: 'in-person',
      icon: Users,
      title: 'In-Person Meetings',
      color: 'from-blue-400 to-cyan-500',
      methods: [
        'Town hall meetings and forums',
        'Community workshops and presentations',
        'Door-to-door canvassing',
        'Farmers markets and community events',
        'Neighborhood association meetings'
      ],
      benefits: 'Direct interaction builds trust and allows for immediate feedback and questions'
    },
    {
      id: 'digital',
      icon: Globe,
      title: 'Digital Outreach',
      color: 'from-emerald-400 to-green-500',
      methods: [
        'Social media campaigns',
        'Email newsletters',
        'Project website with resources',
        'Online surveys and feedback forms',
        'Virtual town halls and webinars'
      ],
      benefits: 'Reaches broader audience and provides ongoing updates and information access'
    },
    {
      id: 'physical',
      icon: Mail,
      title: 'Physical Materials',
      color: 'from-orange-400 to-red-500',
      methods: [
        'Mailed information packets',
        'Flyers and brochures',
        'Posters in community spaces',
        'Local newspaper articles',
        'Newsletters and bulletins'
      ],
      benefits: 'Ensures accessibility for those without internet access and provides tangible reference materials'
    }
  ];

  const stakeholderGroups = [
    {
      icon: Target,
      title: 'Decision-Makers',
      description: 'Town/city government officials',
      approach: 'Align with municipal goals, provide data, show constituent support',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Community Groups',
      description: 'Local organizations and associations',
      approach: 'Emphasize community benefits, shared resources, collective action',
      color: 'bg-blue-500'
    },
    {
      icon: Home,
      title: 'Potential Users',
      description: 'Homeowners and businesses',
      approach: 'Focus on costs, benefits, timeline, and address specific concerns',
      color: 'bg-emerald-500'
    },
    {
      icon: Building2,
      title: 'Community Leaders',
      description: 'Influential voices in the community',
      approach: 'Build champions who can advocate to their networks',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="community-engagement" className="py-24 px-6 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-blue-600">3.4</span>
            <h2 className="text-3xl font-bold text-slate-800">Engagement is Critical</h2>
          </div>
          <p className="text-lg text-slate-600 italic mb-6">
            Key Questions: What is community engagement and why is it crucial? What are some effective tools?
          </p>
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <strong>Community engagement</strong>—reaching out to understand the needs, hopes and aspirations of the
              broader community, including those who feel very affected by a project, and those who could potentially
              benefit or be impacted by it—is a key part of a planning process.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Community members can help point out flaws, come up with new ideas, and otherwise improve the project. More
              importantly, <strong>if someone will be impacted by the project, it's important they have a chance to have a
              say</strong>—or even be persuaded to become a member of your coalition.
            </p>
          </div>
        </motion.div>

        {/* Engagement Channels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Multi-Channel Engagement Approach
          </h4>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {engagementChannels.map((channel, index) => {
              const Icon = channel.icon;
              const isSelected = selectedChannel === channel.id;

              return (
                <motion.div
                  key={channel.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedChannel(isSelected ? null : channel.id)}
                  className="cursor-pointer"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                      isSelected ? 'border-blue-500' : 'border-transparent'
                    }`}
                  >
                    <div className={`bg-gradient-to-r ${channel.color} p-6 text-white`}>
                      <Icon className="w-12 h-12 mb-3" />
                      <h5 className="font-bold text-xl">{channel.title}</h5>
                    </div>

                    <div className="p-6">
                      <ul className="space-y-2 mb-4">
                        {channel.methods.map((method, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${channel.color} mt-1.5 flex-shrink-0`} />
                            {method}
                          </li>
                        ))}
                      </ul>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: isSelected ? 'auto' : 0,
                          opacity: isSelected ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className={`pt-4 border-t border-slate-200 bg-gradient-to-r ${channel.color} bg-opacity-10 p-4 rounded-lg`}>
                          <h6 className="font-semibold text-sm text-slate-800 mb-2">Why This Matters:</h6>
                          <p className="text-sm text-slate-700">{channel.benefits}</p>
                        </div>
                      </motion.div>

                      {!isSelected && (
                        <button className="text-xs font-semibold text-blue-600">Click for benefits →</button>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed">
              <strong>Important:</strong> Be sure to pursue outreach through <strong>multiple channels</strong> (in person,
              digital, physical paper) and develop a broad understanding of who is in the community.
            </p>
          </div>
        </motion.div>

        {/* Stakeholder Groups */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Key Stakeholder Groups
          </h4>

          <div className="grid md:grid-cols-2 gap-6">
            {stakeholderGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${group.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-lg mb-1 text-slate-800">{group.title}</h5>
                      <p className="text-sm text-slate-600 mb-3">{group.description}</p>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <p className="text-xs font-semibold text-slate-600 mb-1">Engagement Approach:</p>
                        <p className="text-sm text-slate-700">{group.approach}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Additional Considerations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <Calendar className="w-10 h-10 text-purple-600 flex-shrink-0" />
              <div>
                <h5 className="text-xl font-bold text-slate-800 mb-3">Municipal Decision Timeline</h5>
                <p className="text-slate-700 leading-relaxed">
                  Remember that one of the key stakeholder groups consists of <strong>decision-makers in the town or city
                  government</strong>. Building buy-in from decision makers and community leaders requires understanding
                  their timeline and priorities. Align your outreach with municipal planning cycles and budget processes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4">
              <Target className="w-10 h-10 flex-shrink-0" />
              <div>
                <h5 className="text-2xl font-bold mb-3">Parallel Projects & Partnerships</h5>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Consider other parallel energy or infrastructure projects that can <strong className="text-white">reduce
                  cost or increase impact</strong> in combination with the geothermal energy project.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  Smaller projects can be combined into a larger project through funding applications as well! Look for
                  opportunities to coordinate with road reconstruction, utility upgrades, or other community improvements.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
