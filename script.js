// Local database of symptoms and conditions
const healthDatabase = {
    symptoms: [
        { id: 'headache', name: 'Headache' },
        { id: 'fever', name: 'Fever' },
        { id: 'cough', name: 'Cough' },
        { id: 'fatigue', name: 'Fatigue' },
        { id: 'sore_throat', name: 'Sore Throat' },
        { id: 'runny_nose', name: 'Runny Nose' },
        { id: 'muscle_pain', name: 'Muscle Pain' },
        { id: 'nausea', name: 'Nausea' },
        { id: 'diarrhea', name: 'Diarrhea' },
        { id: 'shortness_breath', name: 'Shortness of Breath' },
        { id: 'chest_pain', name: 'Chest Pain' },
        { id: 'abdominal_pain', name: 'Abdominal Pain' },
        { id: 'joint_pain', name: 'Joint Pain' },
        { id: 'dizziness', name: 'Dizziness' },
        { id: 'vomiting', name: 'Vomiting' },
        { id: 'rash', name: 'Skin Rash' },
        { id: 'itching', name: 'Itching' },
        { id: 'back_pain', name: 'Back Pain' },
        { id: 'anxiety', name: 'Anxiety' },
        { id: 'insomnia', name: 'Difficulty Sleeping' },
        { id: 'loss_appetite', name: 'Loss of Appetite' },
        { id: 'weight_loss', name: 'Unexplained Weight Loss' },
        { id: 'swollen_glands', name: 'Swollen Lymph Nodes' },
        { id: 'blurred_vision', name: 'Blurred Vision' },
        { id: 'ear_pain', name: 'Ear Pain' },
        { id: 'sinus_pressure', name: 'Sinus Pressure' },
        { id: 'constipation', name: 'Constipation' },
        { id: 'heartburn', name: 'Heartburn' },
        { id: 'stiff_neck', name: 'Stiff Neck' },
        { id: 'sweating', name: 'Excessive Sweating' },
        { id: 'bloating', name: 'Bloating' },
        { id: 'acid_reflux', name: 'Acid Reflux' },
        { id: 'blood_stool', name: 'Blood in Stool' },
        { id: 'stomach_cramps', name: 'Stomach Cramps' },
        { id: 'excessive_gas', name: 'Excessive Gas' },
        { id: 'wheezing', name: 'Wheezing' },
        { id: 'chest_tightness', name: 'Chest Tightness' },
        { id: 'mucus', name: 'Excessive Mucus' },
        { id: 'dry_cough', name: 'Dry Cough' },
        { id: 'wet_cough', name: 'Wet Cough' },
        { id: 'skin_patches', name: 'Red/Scaly Patches' },
        { id: 'skin_blisters', name: 'Blisters' },
        { id: 'skin_swelling', name: 'Skin Swelling' },
        { id: 'skin_burning', name: 'Skin Burning Sensation' },
        { id: 'hives', name: 'Hives' },
        { id: 'upper_abdominal_pain', name: 'Upper Abdominal Pain' },
        { id: 'lower_abdominal_pain', name: 'Lower Abdominal Pain' },
        { id: 'burning_stomach', name: 'Burning Sensation in Stomach' },
        { id: 'early_satiety', name: 'Feeling Full Quickly' },
        { id: 'difficulty_swallowing', name: 'Difficulty Swallowing' },
        { id: 'dark_stools', name: 'Dark/Black Stools' },
        { id: 'yellow_skin', name: 'Yellowing of Skin' },
        { id: 'burping', name: 'Excessive Burping' },
        { id: 'tooth_pain', name: 'Tooth Pain' },
        { id: 'bleeding_gums', name: 'Bleeding Gums' },
        { id: 'swollen_gums', name: 'Swollen Gums' },
        { id: 'bad_breath', name: 'Bad Breath' },
        { id: 'tooth_sensitivity', name: 'Tooth Sensitivity' },
        { id: 'mouth_ulcers', name: 'Mouth Ulcers' },
        { id: 'jaw_pain', name: 'Jaw Pain' },
        { id: 'loose_teeth', name: 'Loose Teeth' },
        { id: 'dry_mouth', name: 'Dry Mouth' },
        { id: 'white_patches', name: 'White Patches in Mouth' },
        { id: 'teeth_grinding', name: 'Teeth Grinding' },
        { id: 'tooth_discoloration', name: 'Tooth Discoloration' },
        { id: 'gum_recession', name: 'Receding Gums' },
        { id: 'tooth_crack', name: 'Cracked Tooth' },
        { id: 'wisdom_pain', name: 'Wisdom Tooth Pain' },
        { id: 'metallic_taste', name: 'Metallic Taste' },
        { id: 'teeth_spacing', name: 'Gaps Between Teeth' },
        { id: 'teeth_crowding', name: 'Crowded Teeth' },
        { id: 'tongue_pain', name: 'Tongue Pain' },
        { id: 'tongue_swelling', name: 'Swollen Tongue' },
        { id: 'black_tongue', name: 'Black/Hairy Tongue' },
        { id: 'geographic_tongue', name: 'Geographic Tongue Patterns' },
        { id: 'burning_tongue', name: 'Burning Sensation on Tongue' },
        { id: 'taste_loss', name: 'Loss of Taste' },
        { id: 'bitter_taste', name: 'Persistent Bitter Taste' },
        { id: 'salty_taste', name: 'Persistent Salty Taste' },
        { id: 'tongue_patches', name: 'White/Red Patches on Tongue' },
        { id: 'tongue_coating', name: 'Thick Tongue Coating' },
        { id: 'ear_fullness', name: 'Ear Fullness/Pressure' },
        { id: 'ear_discharge', name: 'Ear Discharge' },
        { id: 'ear_ringing', name: 'Ringing in Ears (Tinnitus)' },
        { id: 'ear_itching', name: 'Itchy Ears' },
        { id: 'hearing_loss', name: 'Hearing Loss' },
        { id: 'ear_popping', name: 'Ear Popping' },
        { id: 'balance_problems', name: 'Balance Problems' },
        { id: 'ear_bleeding', name: 'Ear Bleeding' },
        { id: 'ear_crackling', name: 'Crackling Sound in Ear' },
        { id: 'ear_numbness', name: 'Numbness Around Ear' },
        { id: 'shoulder_pain', name: 'Shoulder Pain' },
        { id: 'arm_numbness', name: 'Arm Numbness/Tingling' },
        { id: 'wrist_pain', name: 'Wrist Pain' },
        { id: 'elbow_pain', name: 'Elbow Pain' },
        { id: 'knee_pain', name: 'Knee Pain' },
        { id: 'ankle_pain', name: 'Ankle Pain' },
        { id: 'foot_arch_pain', name: 'Foot Arch Pain' },
        { id: 'heel_pain', name: 'Heel Pain' },
        { id: 'calf_pain', name: 'Calf Pain' },
        { id: 'muscle_weakness', name: 'Muscle Weakness' },
        { id: 'joint_swelling', name: 'Joint Swelling' },
        { id: 'limited_mobility', name: 'Limited Range of Motion' },
        { id: 'muscle_cramps', name: 'Muscle Cramps' },
        { id: 'joint_stiffness', name: 'Joint Stiffness' },
        { id: 'leg_swelling', name: 'Leg Swelling' },
        { id: 'eye_redness', name: 'Red Eyes' },
        { id: 'eye_pain', name: 'Eye Pain' },
        { id: 'eye_discharge', name: 'Eye Discharge' },
        { id: 'light_sensitivity', name: 'Light Sensitivity' },
        { id: 'watery_eyes', name: 'Watery Eyes' },
        { id: 'eye_itching', name: 'Itchy Eyes' },
        { id: 'double_vision', name: 'Double Vision' },
        { id: 'eye_floaters', name: 'Eye Floaters' },
        { id: 'facial_swelling', name: 'Facial Swelling' },
        { id: 'facial_numbness', name: 'Facial Numbness' },
        { id: 'facial_redness', name: 'Facial Redness' },
        { id: 'eye_twitching', name: 'Eye Twitching' },
        { id: 'drooping_eyelid', name: 'Drooping Eyelid' },
        { id: 'dark_circles', name: 'Dark Circles Under Eyes' },
        { id: 'puffy_eyes', name: 'Puffy Eyes' },
        { id: 'lip_swelling', name: 'Lip Swelling' },
        { id: 'lip_dryness', name: 'Dry and Chapped Lips' },
        { id: 'lip_discoloration', name: 'Lip Discoloration' },
        { id: 'lip_sores', name: 'Cold Sores or Blisters' },
        { id: 'lip_pain', name: 'Lip Pain or Tenderness' },
        { id: 'lip_numbness', name: 'Lip Numbness or Tingling' },
        { id: 'lip_bleeding', name: 'Bleeding or Cracked Lips' },
        { id: 'lip_rash', name: 'Lip Rash or Irritation' },
        { id: 'lip_burning', name: 'Burning Sensation in Lips' },
        { id: 'lip_scaling', name: 'Scaling or Peeling Lips' },
        { id: 'lip_itching', name: 'Itchy Lips' },
        { id: 'angular_cheilitis', name: 'Corner Mouth Sores' },
        { id: 'lip_bumps', name: 'Bumps on Lips' },
        { id: 'lip_twitching', name: 'Lip Twitching' },
        { id: 'herpes_labialis', name: 'Cold Sores (Herpes Labialis)' },
        { id: 'cheilitis', name: 'Cheilitis (Severely Dry Lips)' },
        { id: 'angular_cheilitis_condition', name: 'Angular Cheilitis' },
        { id: 'allergic_lip_reaction', name: 'Allergic Reaction of Lips' },
        { id: 'lip_dermatitis', name: 'Contact Dermatitis of Lips' },
        { id: 'actinic_cheilitis', name: 'Actinic Cheilitis (Sun Damaged Lips)' },
        { id: 'neurological_lip_symptoms', name: 'Neurological Lip Issues' },
        { id: 'jaw_clicking', name: 'Jaw Clicking or Popping' },
        { id: 'jaw_pain', name: 'Jaw Pain or Tenderness' },
        { id: 'jaw_stiffness', name: 'Limited Jaw Movement' },
        { id: 'jaw_locking', name: 'Jaw Locking or Getting Stuck' },
        { id: 'jaw_clenching', name: 'Involuntary Jaw Clenching' },
        { id: 'neck_pain', name: 'Neck Pain or Soreness' },
        { id: 'neck_stiffness', name: 'Neck Stiffness' },
        { id: 'neck_spasm', name: 'Neck Muscle Spasms' },
        { id: 'neck_cracking', name: 'Neck Cracking or Popping' },
        { id: 'neck_headache', name: 'Neck-related Headache' },
        { id: 'spine_pain', name: 'Spine Pain' },
        { id: 'spine_curvature', name: 'Abnormal Spine Curvature' },
        { id: 'spine_numbness', name: 'Numbness Along Spine' },
        { id: 'spine_weakness', name: 'Muscle Weakness from Spine' },
        { id: 'spine_stiffness', name: 'Spine Stiffness' },
        { id: 'hip_pain', name: 'Hip Pain' },
        { id: 'hip_stiffness', name: 'Hip Joint Stiffness' },
        { id: 'hip_clicking', name: 'Hip Clicking or Snapping' },
        { id: 'hip_instability', name: 'Hip Joint Instability' },
        { id: 'hip_weakness', name: 'Hip Muscle Weakness' },
        { id: 'groin_pain', name: 'Groin Pain' },
        { id: 'groin_swelling', name: 'Groin Swelling' },
        { id: 'groin_strain', name: 'Groin Muscle Strain' },
        { id: 'groin_numbness', name: 'Groin Numbness' },
        { id: 'groin_tenderness', name: 'Groin Tenderness' },
        { id: 'hair_loss', name: 'Hair Loss or Thinning' },
        { id: 'hair_breakage', name: 'Hair Breakage and Splitting' },
        { id: 'scalp_itching', name: 'Itchy Scalp' },
        { id: 'scalp_flaking', name: 'Scalp Flaking or Dandruff' },
        { id: 'oily_scalp', name: 'Excessively Oily Scalp' },
        { id: 'scalp_redness', name: 'Scalp Redness or Inflammation' },
        { id: 'hair_discoloration', name: 'Hair Discoloration' },
        { id: 'scalp_pain', name: 'Scalp Pain or Tenderness' },
        { id: 'hair_thinning', name: 'Hair Thinning at Crown' },
        { id: 'scalp_bumps', name: 'Scalp Bumps or Lesions' }
    ],
    conditions: {
        'common_cold': {
            name: 'Common Cold',
            symptoms: ['cough', 'runny_nose', 'sore_throat', 'fever'],
            remedies: [
                'Rest and stay hydrated',
                'Use over-the-counter cold medications',
                'Gargle with warm salt water',
                'Try honey and lemon tea'
            ]
        },
        'flu': {
            name: 'Influenza (Flu)',
            symptoms: ['fever', 'fatigue', 'muscle_pain', 'headache', 'cough'],
            remedies: [
                'Get plenty of rest',
                'Stay hydrated with water and clear broths',
                'Take acetaminophen for fever',
                'Use a humidifier'
            ]
        },
        'migraine': {
            name: 'Migraine',
            symptoms: ['headache', 'nausea', 'dizziness', 'blurred_vision'],
            remedies: [
                'Rest in a quiet, dark room',
                'Apply cold or warm compress to head/neck',
                'Stay hydrated',
                'Practice relaxation techniques'
            ]
        },
        'gastroenteritis': {
            name: 'Gastroenteritis',
            symptoms: ['nausea', 'vomiting', 'diarrhea', 'abdominal_pain', 'fever'],
            remedies: [
                'Stay hydrated with water and electrolytes',
                'Try the BRAT diet (Bananas, Rice, Applesauce, Toast)',
                'Get plenty of rest',
                'Avoid dairy and fatty foods'
            ]
        },
        'bronchitis': {
            name: 'Bronchitis',
            symptoms: ['cough', 'fatigue', 'shortness_breath', 'chest_pain', 'fever'],
            remedies: [
                'Rest and stay hydrated',
                'Use a humidifier',
                'Try honey for cough',
                'Avoid smoking and secondhand smoke'
            ]
        },
        'sinusitis': {
            name: 'Sinusitis',
            symptoms: ['sinus_pressure', 'headache', 'runny_nose', 'cough', 'fatigue'],
            remedies: [
                'Use a warm compress on your face',
                'Try nasal irrigation with saline solution',
                'Use a humidifier',
                'Stay hydrated and rest'
            ]
        },
        'anxiety_disorder': {
            name: 'Anxiety Disorder',
            symptoms: ['anxiety', 'insomnia', 'fatigue', 'sweating', 'dizziness'],
            remedies: [
                'Practice deep breathing exercises',
                'Try meditation or mindfulness',
                'Regular exercise',
                'Maintain a regular sleep schedule',
                'Limit caffeine intake'
            ]
        },
        'gerd': {
            name: 'Gastroesophageal Reflux Disease (GERD)',
            symptoms: ['heartburn', 'chest_pain', 'nausea', 'difficulty_swallowing'],
            remedies: [
                'Avoid lying down for 3 hours after meals',
                'Eat smaller meals',
                'Avoid trigger foods (spicy, fatty, acidic)',
                'Elevate head of bed while sleeping'
            ]
        },
        'food_poisoning': {
            name: 'Food Poisoning',
            symptoms: ['nausea', 'vomiting', 'diarrhea', 'abdominal_pain', 'fever', 'fatigue'],
            remedies: [
                'Stay hydrated with water and electrolytes',
                'Rest your stomach for a few hours',
                'Gradually introduce bland foods',
                'Get plenty of rest'
            ]
        },
        'allergies': {
            name: 'Seasonal Allergies',
            symptoms: ['runny_nose', 'itching', 'sore_throat', 'cough', 'fatigue'],
            remedies: [
                'Use air purifiers',
                'Keep windows closed during high pollen times',
                'Try over-the-counter antihistamines',
                'Use nasal irrigation'
            ]
        },
        'tension_headache': {
            name: 'Tension Headache',
            symptoms: ['headache', 'stiff_neck', 'fatigue', 'anxiety'],
            remedies: [
                'Practice stress management techniques',
                'Apply a warm or cold compress',
                'Get adequate rest',
                'Try gentle neck stretches'
            ]
        },
        'stomach_ulcer': {
            name: 'Stomach Ulcer',
            symptoms: ['abdominal_pain', 'heartburn', 'nausea', 'loss_appetite', 'weight_loss'],
            remedies: [
                'Eat smaller, more frequent meals',
                'Avoid trigger foods',
                'Limit alcohol and caffeine',
                'Try probiotics'
            ]
        },
        'mononucleosis': {
            name: 'Mononucleosis (Mono)',
            symptoms: ['fatigue', 'sore_throat', 'fever', 'swollen_glands', 'headache'],
            remedies: [
                'Get plenty of rest',
                'Stay hydrated',
                'Use over-the-counter pain relievers',
                'Gargle with salt water for sore throat'
            ]
        },
        'ear_infection': {
            name: 'Ear Infection',
            symptoms: ['ear_pain', 'fever', 'headache', 'dizziness'],
            remedies: [
                'Apply a warm compress to the ear',
                'Rest with your head elevated',
                'Try over-the-counter pain relievers',
                'Avoid getting the ear wet'
            ]
        },
        'ibs': {
            name: 'Irritable Bowel Syndrome (IBS)',
            symptoms: ['abdominal_pain', 'bloating', 'diarrhea', 'constipation', 'excessive_gas'],
            remedies: [
                'Follow a low-FODMAP diet',
                'Manage stress through relaxation techniques',
                'Regular exercise',
                'Eat smaller, regular meals',
                'Keep a food diary to identify triggers'
            ]
        },
        'celiac_disease': {
            name: 'Celiac Disease',
            symptoms: ['diarrhea', 'abdominal_pain', 'bloating', 'weight_loss', 'fatigue'],
            remedies: [
                'Follow a strict gluten-free diet',
                'Take recommended supplements',
                'Stay hydrated',
                'Eat small, frequent meals',
                'Keep a food diary'
            ]
        },
        'crohns': {
            name: 'Crohn\'s Disease',
            symptoms: ['abdominal_pain', 'diarrhea', 'blood_stool', 'weight_loss', 'fatigue'],
            remedies: [
                'Eat small, frequent meals',
                'Stay hydrated',
                'Avoid trigger foods',
                'Reduce stress',
                'Consider probiotics'
            ]
        },
        'asthma': {
            name: 'Asthma',
            symptoms: ['wheezing', 'chest_tightness', 'shortness_breath', 'dry_cough', 'anxiety'],
            remedies: [
                'Use air purifiers',
                'Keep environment dust-free',
                'Practice breathing exercises',
                'Avoid known triggers',
                'Stay hydrated'
            ]
        },
        'pneumonia': {
            name: 'Pneumonia',
            symptoms: ['wet_cough', 'fever', 'shortness_breath', 'chest_pain', 'fatigue', 'mucus'],
            remedies: [
                'Get plenty of rest',
                'Stay hydrated',
                'Use a humidifier',
                'Try deep breathing exercises',
                'Sleep in a semi-upright position'
            ]
        },
        'chronic_bronchitis': {
            name: 'Chronic Bronchitis',
            symptoms: ['wet_cough', 'mucus', 'wheezing', 'shortness_breath', 'fatigue'],
            remedies: [
                'Stop smoking and avoid secondhand smoke',
                'Use a humidifier',
                'Practice breathing exercises',
                'Stay hydrated',
                'Get regular exercise'
            ]
        },
        'eczema': {
            name: 'Eczema (Atopic Dermatitis)',
            symptoms: ['skin_patches', 'itching', 'skin_burning', 'rash', 'skin_swelling'],
            remedies: [
                'Moisturize skin regularly',
                'Use gentle, fragrance-free soaps',
                'Take lukewarm baths',
                'Avoid scratching',
                'Identify and avoid triggers'
            ]
        },
        'psoriasis': {
            name: 'Psoriasis',
            symptoms: ['skin_patches', 'itching', 'joint_pain', 'skin_burning', 'rash'],
            remedies: [
                'Keep skin moisturized',
                'Get some sun exposure (carefully)',
                'Use medicated creams',
                'Take warm baths with colloidal oatmeal',
                'Avoid stress triggers'
            ]
        },
        'contact_dermatitis': {
            name: 'Contact Dermatitis',
            symptoms: ['rash', 'itching', 'skin_burning', 'skin_blisters', 'skin_swelling'],
            remedies: [
                'Avoid the triggering substance',
                'Apply cool compresses',
                'Use calamine lotion',
                'Take cool baths',
                'Keep affected area clean and dry'
            ]
        },
        'urticaria': {
            name: 'Urticaria (Hives)',
            symptoms: ['hives', 'itching', 'skin_swelling', 'skin_burning', 'anxiety'],
            remedies: [
                'Take cool showers',
                'Wear loose-fitting clothes',
                'Apply calamine lotion',
                'Avoid known triggers',
                'Use cold compresses'
            ]
        },
        'gastritis': {
            name: 'Gastritis',
            symptoms: ['upper_abdominal_pain', 'nausea', 'burning_stomach', 'loss_appetite', 'early_satiety'],
            remedies: [
                'Eat smaller, frequent meals',
                'Avoid spicy and acidic foods',
                'Try ginger tea for nausea',
                'Avoid alcohol and caffeine',
                'Consider probiotics'
            ]
        },
        'peptic_ulcer': {
            name: 'Peptic Ulcer',
            symptoms: ['burning_stomach', 'upper_abdominal_pain', 'bloating', 'dark_stools', 'heartburn'],
            remedies: [
                'Avoid trigger foods and drinks',
                'Eat smaller meals more frequently',
                'Don\'t lie down right after eating',
                'Reduce stress levels',
                'Avoid NSAIDs if possible'
            ]
        },
        'appendicitis': {
            name: 'Appendicitis',
            symptoms: ['lower_abdominal_pain', 'nausea', 'fever', 'loss_appetite', 'vomiting'],
            remedies: [
                'Seek immediate medical attention',
                'Don\'t eat or drink anything',
                'Don\'t take pain medications',
                'Avoid applying heat to the area',
                'Rest until medical help arrives'
            ]
        },
        'gallstones': {
            name: 'Gallstones',
            symptoms: ['upper_abdominal_pain', 'nausea', 'vomiting', 'back_pain', 'yellow_skin'],
            remedies: [
                'Maintain a healthy weight',
                'Avoid fatty and fried foods',
                'Stay hydrated',
                'Exercise regularly',
                'Consider a low-fat diet'
            ]
        },
        'gastroparesis': {
            name: 'Gastroparesis',
            symptoms: ['early_satiety', 'nausea', 'vomiting', 'bloating', 'upper_abdominal_pain'],
            remedies: [
                'Eat smaller, more frequent meals',
                'Choose easily digestible foods',
                'Stay upright after meals',
                'Stay hydrated',
                'Try ginger for nausea'
            ]
        },
        'hiatal_hernia': {
            name: 'Hiatal Hernia',
            symptoms: ['chest_pain', 'heartburn', 'difficulty_swallowing', 'burping', 'bloating'],
            remedies: [
                'Eat smaller meals',
                'Avoid lying down after eating',
                'Maintain a healthy weight',
                'Avoid tight clothing',
                'Elevate head of bed while sleeping'
            ]
        },
        'pancreatitis': {
            name: 'Pancreatitis',
            symptoms: ['upper_abdominal_pain', 'nausea', 'fever', 'rapid_pulse', 'vomiting'],
            remedies: [
                'Stop eating temporarily',
                'Stay hydrated',
                'Avoid alcohol completely',
                'Eat a low-fat diet when recovering',
                'Rest and avoid strenuous activity'
            ]
        },
        'diverticulitis': {
            name: 'Diverticulitis',
            symptoms: ['lower_abdominal_pain', 'fever', 'nausea', 'constipation', 'diarrhea'],
            remedies: [
                'Rest and follow liquid diet initially',
                'Gradually add low-fiber foods',
                'Take prescribed antibiotics if recommended',
                'Use a heating pad for pain',
                'Stay hydrated'
            ]
        },
        'gingivitis': {
            name: 'Gingivitis',
            symptoms: ['bleeding_gums', 'swollen_gums', 'bad_breath', 'tooth_sensitivity'],
            remedies: [
                'Brush teeth twice daily with fluoride toothpaste',
                'Floss daily',
                'Use an antiseptic mouthwash',
                'Schedule professional dental cleaning',
                'Improve oral hygiene routine'
            ]
        },
        'periodontitis': {
            name: 'Periodontitis',
            symptoms: ['bleeding_gums', 'swollen_gums', 'bad_breath', 'loose_teeth', 'tooth_sensitivity'],
            remedies: [
                'Seek immediate dental care',
                'Maintain excellent oral hygiene',
                'Use saltwater rinses',
                'Stop smoking if applicable',
                'Use soft-bristled toothbrush'
            ]
        },
        'tooth_abscess': {
            name: 'Tooth Abscess',
            symptoms: ['tooth_pain', 'fever', 'swollen_gums', 'jaw_pain', 'tooth_sensitivity'],
            remedies: [
                'Seek emergency dental care',
                'Rinse with warm salt water',
                'Take over-the-counter pain relievers',
                'Apply cold compress outside the cheek',
                'Avoid very hot or cold foods'
            ]
        },
        'tmj_disorder': {
            name: 'TMJ (Temporomandibular Joint) Disorder',
            symptoms: ['jaw_clicking', 'jaw_pain', 'jaw_stiffness', 'ear_pain', 'headache'],
            remedies: [
                'Apply ice or heat packs to jaw area',
                'Practice gentle jaw exercises',
                'Avoid hard or chewy foods',
                'Consider using a night guard',
                'Practice stress management techniques'
            ]
        },
        'oral_thrush': {
            name: 'Oral Thrush',
            symptoms: ['white_patches', 'dry_mouth', 'loss_taste', 'difficulty_swallowing', 'mouth_ulcers'],
            remedies: [
                'Practice good oral hygiene',
                'Use antifungal mouthwash if prescribed',
                'Rinse with salt water',
                'Eat probiotic-rich foods',
                'Keep mouth clean and dry'
            ]
        },
        'canker_sores': {
            name: 'Canker Sores',
            symptoms: ['mouth_ulcers', 'tooth_pain', 'fever', 'swollen_glands'],
            remedies: [
                'Rinse with salt water',
                'Apply over-the-counter gel treatments',
                'Avoid spicy and acidic foods',
                'Use antimicrobial mouthwash',
                'Take vitamin B12 supplements'
            ]
        },
        'tooth_decay': {
            name: 'Tooth Decay (Cavities)',
            symptoms: ['tooth_pain', 'tooth_sensitivity', 'visible_holes', 'dark_spots'],
            remedies: [
                'See a dentist as soon as possible',
                'Use fluoride toothpaste',
                'Reduce sugar intake',
                'Rinse mouth after meals',
                'Use sensitive teeth toothpaste'
            ]
        },
        'dry_mouth_syndrome': {
            name: 'Dry Mouth Syndrome (Xerostomia)',
            symptoms: ['dry_mouth', 'bad_breath', 'difficulty_swallowing', 'tooth_sensitivity', 'mouth_ulcers'],
            remedies: [
                'Stay hydrated',
                'Use sugar-free gum or lozenges',
                'Avoid caffeine and alcohol',
                'Use a humidifier while sleeping',
                'Try artificial saliva products'
            ]
        },
        'bruxism_jaw': {
            name: 'Bruxism (Teeth Grinding)',
            symptoms: ['jaw_clenching', 'jaw_pain', 'headache', 'tooth_pain', 'jaw_stiffness'],
            remedies: [
                'Use a custom-fitted night guard',
                'Practice stress reduction techniques',
                'Avoid caffeine before bedtime',
                'Apply warm compress to jaw muscles',
                'Consider dental evaluation'
            ]
        },
        'tooth_erosion': {
            name: 'Tooth Erosion',
            symptoms: ['tooth_sensitivity', 'tooth_discoloration', 'tooth_pain', 'teeth_spacing'],
            remedies: [
                'Use sensitive toothpaste',
                'Avoid acidic foods and drinks',
                'Wait 30 minutes after eating to brush',
                'Use a straw for acidic beverages',
                'Consider fluoride treatments'
            ]
        },
        'gum_recession': {
            name: 'Gum Recession',
            symptoms: ['gum_recession', 'tooth_sensitivity', 'tooth_pain', 'bleeding_gums'],
            remedies: [
                'Use soft-bristled toothbrush',
                'Gentle brushing technique',
                'Use sensitive toothpaste',
                'Consider gum massage',
                'Maintain regular dental checkups'
            ]
        },
        'cracked_tooth': {
            name: 'Cracked Tooth Syndrome',
            symptoms: ['tooth_crack', 'tooth_pain', 'tooth_sensitivity', 'pain_when_chewing'],
            remedies: [
                'Avoid chewing on affected side',
                'Use sensitive toothpaste',
                'Avoid extreme temperature foods',
                'See dentist as soon as possible',
                'Consider temporary dental cement'
            ]
        },
        'wisdom_teeth': {
            name: 'Wisdom Teeth Problems',
            symptoms: ['wisdom_pain', 'jaw_pain', 'swollen_gums', 'difficulty_swallowing', 'headache'],
            remedies: [
                'Rinse with warm salt water',
                'Apply cold compress outside the cheek',
                'Take over-the-counter pain relievers',
                'Keep area clean with gentle brushing',
                'Use antiseptic mouthwash'
            ]
        },
        'tooth_staining': {
            name: 'Tooth Discoloration',
            symptoms: ['tooth_discoloration', 'metallic_taste', 'tooth_sensitivity'],
            remedies: [
                'Practice good oral hygiene',
                'Avoid staining foods and drinks',
                'Use whitening toothpaste',
                'Rinse mouth after consuming staining substances',
                'Consider professional cleaning'
            ]
        },
        'malocclusion': {
            name: 'Dental Malocclusion',
            symptoms: ['teeth_crowding', 'jaw_pain', 'difficulty_chewing', 'teeth_spacing'],
            remedies: [
                'Consult orthodontist for evaluation',
                'Maintain good oral hygiene',
                'Use prescribed dental appliances',
                'Follow specific cleaning instructions',
                'Regular dental check-ups'
            ]
        },
        'dental_abscess_gum': {
            name: 'Gum (Periodontal) Abscess',
            symptoms: ['swollen_gums', 'severe_tooth_pain', 'fever', 'bad_breath', 'metallic_taste'],
            remedies: [
                'Seek immediate dental care',
                'Rinse with warm salt water',
                'Take prescribed antibiotics if given',
                'Use over-the-counter pain relievers',
                'Keep area clean with gentle brushing'
            ]
        },
        'glossitis': {
            name: 'Glossitis (Tongue Inflammation)',
            symptoms: ['tongue_pain', 'tongue_swelling', 'tongue_patches', 'difficulty_swallowing', 'burning_tongue'],
            remedies: [
                'Avoid irritating foods and drinks',
                'Use alcohol-free mouthwash',
                'Practice good oral hygiene',
                'Stay hydrated',
                'Take vitamin B supplements if recommended'
            ]
        },
        'black_hairy_tongue': {
            name: 'Black Hairy Tongue',
            symptoms: ['black_tongue', 'bad_breath', 'metallic_taste', 'tongue_coating'],
            remedies: [
                'Brush tongue gently but thoroughly',
                'Quit smoking if applicable',
                'Stay hydrated',
                'Practice good oral hygiene',
                'Use a tongue scraper'
            ]
        },
        'geographic_tongue': {
            name: 'Geographic Tongue',
            symptoms: ['geographic_tongue', 'tongue_pain', 'burning_tongue', 'tongue_patches'],
            remedies: [
                'Avoid spicy and acidic foods',
                'Use over-the-counter pain relievers',
                'Rinse with salt water',
                'Use alcohol-free mouthwash',
                'Stay hydrated'
            ]
        },
        'burning_mouth_syndrome': {
            name: 'Burning Mouth Syndrome',
            symptoms: ['burning_tongue', 'dry_mouth', 'taste_loss', 'bitter_taste', 'tongue_pain'],
            remedies: [
                'Sip water frequently',
                'Avoid spicy foods and irritants',
                'Try sugar-free gum',
                'Practice stress reduction',
                'Use artificial saliva products'
            ]
        },
        'taste_disorders': {
            name: 'Taste Disorders (Dysgeusia)',
            symptoms: ['taste_loss', 'metallic_taste', 'bitter_taste', 'salty_taste'],
            remedies: [
                'Maintain good oral hygiene',
                'Quit smoking if applicable',
                'Stay hydrated',
                'Use zinc supplements if recommended',
                'Clean tongue regularly'
            ]
        },
        'tongue_lichen_planus': {
            name: 'Oral Lichen Planus (Tongue)',
            symptoms: ['tongue_patches', 'burning_tongue', 'tongue_pain', 'metallic_taste', 'mouth_ulcers'],
            remedies: [
                'Use corticosteroid mouthwash if prescribed',
                'Avoid spicy and acidic foods',
                'Practice good oral hygiene',
                'Use alcohol-free mouthwash',
                'Stay hydrated'
            ]
        },
        'vitamin_b12_deficiency': {
            name: 'Vitamin B12 Deficiency (Oral Symptoms)',
            symptoms: ['tongue_pain', 'burning_tongue', 'taste_loss', 'tongue_patches', 'mouth_ulcers'],
            remedies: [
                'Take B12 supplements as prescribed',
                'Increase B12-rich foods in diet',
                'Regular dental check-ups',
                'Stay hydrated',
                'Maintain good oral hygiene'
            ]
        },
        'salivary_gland_disorders': {
            name: 'Salivary Gland Disorders',
            symptoms: ['dry_mouth', 'taste_loss', 'difficulty_swallowing', 'mouth_ulcers', 'tongue_pain'],
            remedies: [
                'Stay well hydrated',
                'Use sugar-free candies or gum',
                'Avoid caffeine and alcohol',
                'Use artificial saliva products',
                'Practice good oral hygiene'
            ]
        },
        'outer_ear_infection': {
            name: 'Outer Ear Infection (Swimmer\'s Ear)',
            symptoms: ['ear_pain', 'ear_itching', 'ear_discharge', 'ear_fullness', 'hearing_loss'],
            remedies: [
                'Keep ears dry',
                'Use prescribed ear drops',
                'Avoid swimming until healed',
                'Don\'t insert objects into ear',
                'Use ear plugs when swimming'
            ]
        },
        'middle_ear_infection': {
            name: 'Middle Ear Infection (Otitis Media)',
            symptoms: ['ear_pain', 'fever', 'ear_fullness', 'hearing_loss', 'ear_discharge'],
            remedies: [
                'Take prescribed antibiotics if given',
                'Use warm compress for pain',
                'Take over-the-counter pain relievers',
                'Rest with head elevated',
                'Avoid getting ears wet'
            ]
        },
        'eustachian_tube_dysfunction': {
            name: 'Eustachian Tube Dysfunction',
            symptoms: ['ear_fullness', 'ear_popping', 'hearing_loss', 'ear_pain', 'balance_problems'],
            remedies: [
                'Try yawning or swallowing',
                'Chew gum',
                'Practice breathing exercises',
                'Use nasal decongestants if recommended',
                'Avoid sudden altitude changes'
            ]
        },
        'tinnitus': {
            name: 'Tinnitus',
            symptoms: ['ear_ringing', 'hearing_loss', 'dizziness', 'anxiety', 'insomnia'],
            remedies: [
                'Use white noise machines',
                'Avoid loud noises',
                'Practice relaxation techniques',
                'Consider sound therapy',
                'Maintain good sleep habits'
            ]
        },
        'meniere_disease': {
            name: 'Meniere\'s Disease',
            symptoms: ['ear_fullness', 'hearing_loss', 'ear_ringing', 'balance_problems', 'dizziness'],
            remedies: [
                'Reduce salt intake',
                'Avoid caffeine and alcohol',
                'Stay hydrated',
                'Get adequate rest',
                'Manage stress levels'
            ]
        },
        'ear_wax_blockage': {
            name: 'Ear Wax Blockage',
            symptoms: ['ear_fullness', 'hearing_loss', 'ear_pain', 'ear_ringing', 'dizziness'],
            remedies: [
                'Use ear wax softening drops',
                'Avoid cotton swabs',
                'Consider professional cleaning',
                'Use warm compress',
                'Don\'t insert objects into ear'
            ]
        },
        'perforated_eardrum': {
            name: 'Perforated Eardrum',
            symptoms: ['ear_pain', 'ear_discharge', 'hearing_loss', 'ear_ringing', 'ear_bleeding'],
            remedies: [
                'Keep ear dry',
                'Avoid swimming',
                'Take prescribed medications',
                'Protect ear from loud noises',
                'Avoid air pressure changes'
            ]
        },
        'acoustic_neuroma': {
            name: 'Acoustic Neuroma',
            symptoms: ['hearing_loss', 'ear_ringing', 'balance_problems', 'ear_numbness', 'headache'],
            remedies: [
                'Seek medical evaluation',
                'Monitor symptoms',
                'Maintain balance exercises',
                'Protect hearing',
                'Regular check-ups'
            ]
        },
        'labyrinthitis': {
            name: 'Labyrinthitis',
            symptoms: ['dizziness', 'balance_problems', 'hearing_loss', 'ear_ringing', 'nausea'],
            remedies: [
                'Rest in quiet environment',
                'Avoid sudden movements',
                'Stay hydrated',
                'Take prescribed medications',
                'Gradually increase activity'
            ]
        },
        'ear_barotrauma': {
            name: 'Ear Barotrauma (Airplane Ear)',
            symptoms: ['ear_pain', 'ear_fullness', 'hearing_loss', 'ear_popping', 'dizziness'],
            remedies: [
                'Yawn or swallow during altitude changes',
                'Use filtered earplugs',
                'Chew gum during flights',
                'Stay awake during landing',
                'Consider decongestants before flying'
            ]
        },
        'otosclerosis': {
            name: 'Otosclerosis',
            symptoms: ['hearing_loss', 'ear_ringing', 'balance_problems', 'ear_crackling'],
            remedies: [
                'Monitor hearing changes',
                'Protect ears from loud noise',
                'Consider hearing aids if recommended',
                'Regular hearing tests',
                'Maintain good ear hygiene'
            ]
        },
        'ear_foreign_body': {
            name: 'Foreign Body in Ear',
            symptoms: ['ear_pain', 'ear_fullness', 'hearing_loss', 'ear_discharge', 'ear_itching'],
            remedies: [
                'Do not attempt removal at home',
                'Keep ear dry',
                'Seek immediate medical attention',
                'Avoid inserting objects',
                'Prevent further entry of object'
            ]
        },
        'ear_dermatitis': {
            name: 'Ear Canal Dermatitis',
            symptoms: ['ear_itching', 'ear_pain', 'ear_discharge', 'ear_redness', 'ear_scaling'],
            remedies: [
                'Keep ears dry',
                'Use prescribed ear drops',
                'Avoid scratching',
                'Use hypoallergenic products',
                'Identify and avoid triggers'
            ]
        },
        'cholesteatoma': {
            name: 'Cholesteatoma',
            symptoms: ['ear_discharge', 'hearing_loss', 'ear_pain', 'balance_problems', 'ear_pressure'],
            remedies: [
                'Keep ear dry',
                'Use prescribed medications',
                'Regular ear cleaning by professional',
                'Avoid water exposure',
                'Monitor for changes'
            ]
        },
        'carpal_tunnel': {
            name: 'Carpal Tunnel Syndrome',
            symptoms: ['wrist_pain', 'arm_numbness', 'muscle_weakness', 'limited_mobility'],
            remedies: [
                'Use ergonomic keyboard and mouse',
                'Take frequent breaks from repetitive activities',
                'Wear a wrist splint',
                'Apply cold packs to reduce swelling',
                'Perform wrist stretching exercises'
            ]
        },
        'tennis_elbow': {
            name: 'Tennis Elbow',
            symptoms: ['elbow_pain', 'muscle_weakness', 'arm_numbness', 'limited_mobility'],
            remedies: [
                'Rest the affected arm',
                'Apply ice packs',
                'Use an elbow strap',
                'Gentle stretching exercises',
                'Avoid activities that cause pain'
            ]
        },
        'frozen_shoulder': {
            name: 'Frozen Shoulder',
            symptoms: ['shoulder_pain', 'limited_mobility', 'joint_stiffness', 'muscle_weakness'],
            remedies: [
                'Gentle shoulder exercises',
                'Apply heat before stretching',
                'Use ice for pain relief',
                'Consider physical therapy',
                'Take anti-inflammatory medications'
            ]
        },
        'plantar_fasciitis': {
            name: 'Plantar Fasciitis',
            symptoms: ['heel_pain', 'foot_arch_pain', 'joint_stiffness', 'limited_mobility'],
            remedies: [
                'Stretch your feet regularly',
                'Wear supportive shoes',
                'Use orthotic inserts',
                'Apply ice to reduce inflammation',
                'Rest and elevate feet'
            ]
        },
        'shin_splints': {
            name: 'Shin Splints',
            symptoms: ['leg_pain', 'muscle_weakness', 'joint_swelling', 'limited_mobility'],
            remedies: [
                'Rest from high-impact activities',
                'Apply ice packs',
                'Wear proper footwear',
                'Gradually return to activity',
                'Stretch calf muscles'
            ]
        },
        'rotator_cuff': {
            name: 'Rotator Cuff Tendinitis',
            symptoms: ['shoulder_pain', 'limited_mobility', 'muscle_weakness', 'joint_stiffness'],
            remedies: [
                'Rest the affected shoulder',
                'Apply ice for pain relief',
                'Gentle stretching exercises',
                'Avoid overhead activities',
                'Consider physical therapy'
            ]
        },
        'knee_bursitis': {
            name: 'Knee Bursitis',
            symptoms: ['knee_pain', 'joint_swelling', 'limited_mobility', 'joint_stiffness'],
            remedies: [
                'Rest the affected knee',
                'Apply ice packs',
                'Wear knee padding for protection',
                'Avoid kneeling',
                'Gentle stretching exercises'
            ]
        },
        'achilles_tendinitis': {
            name: 'Achilles Tendinitis',
            symptoms: ['heel_pain', 'ankle_pain', 'joint_stiffness', 'limited_mobility'],
            remedies: [
                'Rest and reduce activity',
                'Apply ice packs',
                'Wear supportive shoes',
                'Stretch calf muscles',
                'Avoid high-impact activities'
            ]
        },
        'sciatica': {
            name: 'Sciatica',
            symptoms: ['back_pain', 'leg_pain', 'muscle_weakness', 'arm_numbness'],
            remedies: [
                'Apply hot/cold packs',
                'Gentle stretching exercises',
                'Maintain good posture',
                'Avoid prolonged sitting',
                'Consider physical therapy'
            ]
        },
        'muscle_strain': {
            name: 'Muscle Strain',
            symptoms: ['muscle_pain', 'muscle_weakness', 'limited_mobility', 'joint_swelling'],
            remedies: [
                'Rest the affected area',
                'Apply ice for first 48 hours',
                'Use compression bandage',
                'Elevate the affected area',
                'Gentle stretching when ready'
            ]
        },
        'ankle_sprain': {
            name: 'Ankle Sprain',
            symptoms: ['ankle_pain', 'joint_swelling', 'limited_mobility', 'muscle_weakness'],
            remedies: [
                'Follow RICE (Rest, Ice, Compression, Elevation)',
                'Use ankle support',
                'Avoid weight bearing initially',
                'Gentle ankle exercises',
                'Gradually return to activity'
            ]
        },
        'arthritis': {
            name: 'Osteoarthritis',
            symptoms: ['joint_pain', 'joint_stiffness', 'joint_swelling', 'limited_mobility'],
            remedies: [
                'Regular low-impact exercise',
                'Maintain healthy weight',
                'Use hot/cold therapy',
                'Consider joint supplements',
                'Use assistive devices if needed'
            ]
        },
        'fibromyalgia': {
            name: 'Fibromyalgia',
            symptoms: ['muscle_pain', 'fatigue', 'joint_stiffness', 'muscle_weakness', 'insomnia'],
            remedies: [
                'Regular gentle exercise',
                'Practice stress reduction',
                'Maintain good sleep habits',
                'Try heat therapy',
                'Consider gentle massage'
            ]
        },
        'tendonitis': {
            name: 'Tendonitis',
            symptoms: ['joint_pain', 'joint_swelling', 'limited_mobility', 'muscle_weakness'],
            remedies: [
                'Rest the affected area',
                'Apply ice packs',
                'Use compression',
                'Gentle stretching exercises',
                'Avoid overuse'
            ]
        },
        'bursitis': {
            name: 'Bursitis',
            symptoms: ['joint_pain', 'joint_swelling', 'limited_mobility', 'muscle_weakness'],
            remedies: [
                'Rest the affected joint',
                'Apply ice packs',
                'Take anti-inflammatory medications',
                'Avoid activities that cause pain',
                'Consider physical therapy'
            ]
        },
        'conjunctivitis': {
            name: 'Conjunctivitis (Pink Eye)',
            symptoms: ['eye_redness', 'eye_discharge', 'eye_itching', 'watery_eyes', 'light_sensitivity'],
            remedies: [
                'Apply warm compresses',
                'Use artificial tears',
                'Keep eyes clean',
                'Avoid touching or rubbing eyes',
                'Use prescribed eye drops if bacterial'
            ]
        },
        'dry_eye_syndrome': {
            name: 'Dry Eye Syndrome',
            symptoms: ['eye_pain', 'light_sensitivity', 'watery_eyes', 'blurred_vision', 'eye_redness'],
            remedies: [
                'Use artificial tears regularly',
                'Take regular screen breaks',
                'Stay hydrated',
                'Consider using a humidifier',
                'Protect eyes from wind and sun'
            ]
        },
        'glaucoma': {
            name: 'Glaucoma',
            symptoms: ['eye_pain', 'blurred_vision', 'light_sensitivity', 'headache', 'nausea'],
            remedies: [
                'Use prescribed eye drops regularly',
                'Regular eye check-ups',
                'Protect eyes from injury',
                'Maintain healthy blood pressure',
                'Exercise regularly as recommended'
            ]
        },
        'stye': {
            name: 'Stye',
            symptoms: ['eye_pain', 'eye_redness', 'eye_swelling', 'eye_discharge', 'light_sensitivity'],
            remedies: [
                'Apply warm compresses',
                'Keep eye area clean',
                'Avoid eye makeup',
                'Don\'t pop or squeeze',
                'Use antibiotic ointment if prescribed'
            ]
        },
        'blepharitis': {
            name: 'Blepharitis',
            symptoms: ['eye_redness', 'eye_itching', 'eye_discharge', 'burning_eyes', 'light_sensitivity'],
            remedies: [
                'Clean eyelids regularly',
                'Apply warm compresses',
                'Use artificial tears',
                'Practice good eye hygiene',
                'Consider eyelid scrubs'
            ]
        },
        'eye_strain': {
            name: 'Digital Eye Strain',
            symptoms: ['eye_pain', 'blurred_vision', 'headache', 'dry_eyes', 'neck_pain'],
            remedies: [
                'Follow 20-20-20 rule',
                'Adjust screen brightness',
                'Use proper lighting',
                'Maintain good posture',
                'Consider computer glasses'
            ]
        },
        'bells_palsy': {
            name: 'Bell\'s Palsy',
            symptoms: ['facial_numbness', 'facial_weakness', 'drooping_eyelid', 'eye_twitching', 'headache'],
            remedies: [
                'Protect affected eye',
                'Use artificial tears',
                'Physical therapy exercises',
                'Keep face warm',
                'Take prescribed medications'
            ]
        },
        'facial_cellulitis': {
            name: 'Facial Cellulitis',
            symptoms: ['facial_swelling', 'facial_redness', 'fever', 'skin_pain', 'warmth_in_face'],
            remedies: [
                'Take prescribed antibiotics',
                'Apply warm compresses',
                'Rest and elevate head',
                'Stay hydrated',
                'Monitor for spreading'
            ]
        },
        'eye_migraine': {
            name: 'Ocular Migraine',
            symptoms: ['visual_disturbances', 'headache', 'light_sensitivity', 'nausea', 'blurred_vision'],
            remedies: [
                'Rest in dark room',
                'Apply cold compresses',
                'Practice stress management',
                'Stay hydrated',
                'Identify and avoid triggers'
            ]
        },
        'eye_allergy': {
            name: 'Eye Allergies',
            symptoms: ['eye_itching', 'watery_eyes', 'eye_redness', 'puffy_eyes', 'light_sensitivity'],
            remedies: [
                'Use antihistamine eye drops',
                'Apply cold compresses',
                'Avoid allergens',
                'Keep windows closed when pollen is high',
                'Don\'t rub eyes'
            ]
        },
        'floaters': {
            name: 'Eye Floaters',
            symptoms: ['eye_floaters', 'flashing_lights', 'blurred_vision', 'eye_strain'],
            remedies: [
                'Regular eye check-ups',
                'Wear sunglasses outdoors',
                'Rest eyes regularly',
                'Stay hydrated',
                'Report sudden increases to doctor'
            ]
        },
        'facial_neuralgia': {
            name: 'Trigeminal Neuralgia',
            symptoms: ['facial_pain', 'facial_numbness', 'headache', 'eye_pain', 'facial_twitching'],
            remedies: [
                'Take prescribed medications',
                'Avoid trigger activities',
                'Apply warm/cold compresses',
                'Practice stress reduction',
                'Gentle facial exercises'
            ]
        },
        'eye_infection': {
            name: 'Bacterial Eye Infection',
            symptoms: ['eye_discharge', 'eye_pain', 'eye_redness', 'light_sensitivity', 'eye_swelling'],
            remedies: [
                'Use prescribed antibiotic drops',
                'Keep eyes clean',
                'Apply warm compresses',
                'Avoid contact lenses',
                'Wash hands frequently'
            ]
        },
        'dark_circles': {
            name: 'Dark Circles Under Eyes',
            symptoms: ['dark_circles', 'puffy_eyes', 'tired_eyes', 'eye_bags'],
            remedies: [
                'Get adequate sleep',
                'Stay hydrated',
                'Use cold compresses',
                'Elevate head while sleeping',
                'Consider vitamin K cream'
            ]
        },
        'eye_fatigue': {
            name: 'Eye Fatigue',
            symptoms: ['eye_strain', 'blurred_vision', 'dry_eyes', 'headache', 'light_sensitivity'],
            remedies: [
                'Take regular breaks',
                'Adjust lighting',
                'Use proper eyewear',
                'Practice eye exercises',
                'Maintain proper distance from screens'
            ]
        },
        'lip_conditions': {
            name: 'Lip Conditions',
            symptoms: [
                'lip_swelling', 'lip_dryness', 'lip_discoloration', 'lip_sores',
                'lip_pain', 'lip_numbness', 'lip_bleeding', 'lip_rash',
                'lip_burning', 'lip_scaling', 'lip_itching', 'angular_cheilitis',
                'lip_bumps', 'lip_twitching'
            ],
            remedies: [
                'Apply lip balm or moisturizer regularly',
                'Stay hydrated by drinking plenty of water',
                'Avoid licking your lips',
                'Use sun protection for lips when outdoors',
                'Avoid irritating products',
                'Consider using a humidifier',
                'Consult a healthcare provider for persistent symptoms'
            ]
        },
        'herpes_labialis': {
            name: 'Cold Sores (Herpes Labialis)',
            symptoms: ['lip_sores', 'lip_pain', 'lip_burning', 'lip_itching', 'lip_swelling'],
            remedies: [
                'Apply antiviral cream if prescribed',
                'Use cold compresses for pain relief',
                'Avoid touching or picking at sores',
                'Apply lip sunblock',
                'Keep the affected area clean and dry'
            ]
        },
        'cheilitis': {
            name: 'Cheilitis (Severely Dry Lips)',
            symptoms: ['lip_dryness', 'lip_scaling', 'lip_pain', 'lip_bleeding', 'lip_rash'],
            remedies: [
                'Apply moisturizing lip balm frequently',
                'Stay hydrated',
                'Use a humidifier',
                'Avoid licking lips',
                'Consider vitamin B supplementation'
            ]
        },
        'angular_cheilitis_condition': {
            name: 'Angular Cheilitis',
            symptoms: ['angular_cheilitis', 'lip_pain', 'lip_burning', 'lip_rash', 'lip_bleeding'],
            remedies: [
                'Keep corners of mouth clean and dry',
                'Apply prescribed antifungal cream',
                'Use moisture barrier ointment',
                'Maintain good oral hygiene',
                'Consider B vitamin supplements'
            ]
        },
        'allergic_lip_reaction': {
            name: 'Allergic Reaction of Lips',
            symptoms: ['lip_swelling', 'lip_itching', 'lip_burning', 'lip_rash', 'lip_pain'],
            remedies: [
                'Remove the allergen if known',
                'Take antihistamines if recommended',
                'Apply cold compress',
                'Avoid potential triggers',
                'Seek immediate care if breathing affected'
            ]
        },
        'lip_dermatitis': {
            name: 'Contact Dermatitis of Lips',
            symptoms: ['lip_rash', 'lip_burning', 'lip_itching', 'lip_scaling', 'lip_pain'],
            remedies: [
                'Identify and avoid irritants',
                'Use hypoallergenic lip products',
                'Apply prescribed steroid cream if recommended',
                'Keep lips moisturized',
                'Avoid flavored lip products'
            ]
        },
        'actinic_cheilitis': {
            name: 'Actinic Cheilitis (Sun Damaged Lips)',
            symptoms: ['lip_scaling', 'lip_discoloration', 'lip_pain', 'lip_bumps', 'lip_dryness'],
            remedies: [
                'Use high SPF lip balm',
                'Avoid excessive sun exposure',
                'Keep lips moisturized',
                'Regular dermatologist check-ups',
                'Wear protective lip covering outdoors'
            ]
        },
        'neurological_lip_symptoms': {
            name: 'Neurological Lip Issues',
            symptoms: ['lip_numbness', 'lip_twitching', 'lip_burning', 'facial_numbness', 'lip_pain'],
            remedies: [
                'Consult a neurologist',
                'Track trigger factors',
                'Manage stress levels',
                'Consider vitamin B12 levels',
                'Maintain good sleep habits'
            ]
        },
        'jaw_dislocation': {
            name: 'Jaw Dislocation',
            symptoms: ['jaw_locking', 'jaw_pain', 'difficulty_swallowing', 'jaw_stiffness', 'facial_swelling'],
            remedies: [
                'Seek immediate medical attention',
                'Do not try to force jaw movement',
                'Apply ice pack to reduce swelling',
                'Follow medical professional\'s instructions',
                'Avoid wide jaw movements during recovery'
            ]
        },
        'cervical_strain': {
            name: 'Cervical Strain (Neck Strain)',
            symptoms: ['neck_pain', 'neck_stiffness', 'neck_headache', 'shoulder_pain', 'limited_mobility'],
            remedies: [
                'Apply ice/heat therapy',
                'Practice gentle neck stretches',
                'Maintain good posture',
                'Use a supportive pillow',
                'Consider physical therapy'
            ]
        },
        'cervical_spondylosis': {
            name: 'Cervical Spondylosis',
            symptoms: ['neck_pain', 'neck_stiffness', 'neck_cracking', 'arm_numbness', 'headache'],
            remedies: [
                'Regular neck exercises',
                'Use proper ergonomics',
                'Apply heat therapy',
                'Take prescribed medications',
                'Consider neck support while sleeping'
            ]
        },
        'torticollis': {
            name: 'Torticollis (Wry Neck)',
            symptoms: ['neck_spasm', 'neck_pain', 'neck_stiffness', 'limited_mobility', 'headache'],
            remedies: [
                'Apply warm compress',
                'Gentle stretching exercises',
                'Maintain proper sleeping position',
                'Consider massage therapy',
                'Follow physical therapy routine'
            ]
        },
        'scoliosis': {
            name: 'Scoliosis',
            symptoms: ['spine_curvature', 'spine_pain', 'limited_mobility', 'uneven_shoulders', 'spine_stiffness'],
            remedies: [
                'Regular exercise and stretching',
                'Maintain good posture',
                'Physical therapy exercises',
                'Use prescribed bracing if recommended',
                'Regular monitoring by specialist'
            ]
        },
        'herniated_disc': {
            name: 'Herniated Disc',
            symptoms: ['spine_pain', 'spine_numbness', 'spine_weakness', 'leg_pain', 'back_pain'],
            remedies: [
                'Rest and avoid strenuous activity',
                'Apply ice/heat therapy',
                'Practice proper lifting techniques',
                'Consider physical therapy',
                'Follow prescribed exercise routine'
            ]
        },
        'spinal_stenosis': {
            name: 'Spinal Stenosis',
            symptoms: ['spine_pain', 'spine_numbness', 'spine_weakness', 'spine_stiffness', 'leg_pain'],
            remedies: [
                'Regular low-impact exercise',
                'Maintain good posture',
                'Use proper body mechanics',
                'Consider physical therapy',
                'Follow pain management techniques'
            ]
        },
        'hip_osteoarthritis': {
            name: 'Hip Osteoarthritis',
            symptoms: ['hip_pain', 'hip_stiffness', 'hip_weakness', 'limited_mobility', 'joint_pain'],
            remedies: [
                'Low-impact exercises',
                'Weight management',
                'Physical therapy',
                'Use of walking aids if needed',
                'Apply heat/cold therapy'
            ]
        },
        'hip_bursitis': {
            name: 'Hip Bursitis',
            symptoms: ['hip_pain', 'hip_tenderness', 'joint_pain', 'hip_stiffness', 'muscle_weakness'],
            remedies: [
                'Rest and avoid pressure on hip',
                'Apply ice to reduce inflammation',
                'Take anti-inflammatory medications',
                'Physical therapy exercises',
                'Use cushions when sitting'
            ]
        },
        'snapping_hip': {
            name: 'Snapping Hip Syndrome',
            symptoms: ['hip_clicking', 'hip_pain', 'hip_weakness', 'hip_instability', 'muscle_pain'],
            remedies: [
                'Modify activities temporarily',
                'Stretching exercises',
                'Strengthen hip muscles',
                'Physical therapy',
                'Avoid repetitive movements'
            ]
        },
        'groin_strain': {
            name: 'Groin Strain',
            symptoms: ['groin_pain', 'groin_strain', 'groin_tenderness', 'muscle_weakness', 'limited_mobility'],
            remedies: [
                'Rest and ice application',
                'Compression therapy',
                'Gentle stretching exercises',
                'Gradual return to activities',
                'Physical therapy'
            ]
        },
        'sports_hernia': {
            name: 'Sports Hernia (Athletic Pubalgia)',
            symptoms: ['groin_pain', 'groin_tenderness', 'hip_pain', 'abdominal_pain', 'muscle_weakness'],
            remedies: [
                'Rest from aggravating activities',
                'Physical therapy exercises',
                'Core strengthening',
                'Ice therapy',
                'Proper warm-up before activities'
            ]
        },
        'lymphadenopathy': {
            name: 'Groin Lymphadenopathy',
            symptoms: ['groin_swelling', 'groin_tenderness', 'groin_pain', 'groin_numbness', 'fever'],
            remedies: [
                'Consult healthcare provider',
                'Rest and elevation',
                'Warm compresses',
                'Keep area clean',
                'Monitor for changes'
            ]
        },
        'androgenic_alopecia': {
            name: 'Androgenic Alopecia (Pattern Hair Loss)',
            symptoms: ['hair_loss', 'hair_thinning', 'hair_breakage', 'scalp_itching', 'oily_scalp'],
            remedies: [
                'Consult a dermatologist',
                'Consider prescribed medications',
                'Use gentle hair care products',
                'Avoid harsh styling techniques',
                'Maintain good scalp hygiene'
            ]
        },
        'seborrheic_dermatitis': {
            name: 'Seborrheic Dermatitis',
            symptoms: ['scalp_flaking', 'scalp_itching', 'scalp_redness', 'oily_scalp', 'hair_loss'],
            remedies: [
                'Use medicated anti-dandruff shampoo',
                'Regular scalp cleansing',
                'Avoid hair products that irritate scalp',
                'Manage stress levels',
                'Consider tea tree oil products'
            ]
        },
        'scalp_psoriasis': {
            name: 'Scalp Psoriasis',
            symptoms: ['scalp_flaking', 'scalp_redness', 'scalp_pain', 'scalp_itching', 'hair_loss'],
            remedies: [
                'Use prescribed medicated shampoos',
                'Apply topical treatments',
                'Gentle scalp care',
                'Avoid scratching',
                'Regular moisturizing of scalp'
            ]
        },
        'folliculitis': {
            name: 'Folliculitis',
            symptoms: ['scalp_bumps', 'scalp_pain', 'scalp_itching', 'scalp_redness', 'hair_loss'],
            remedies: [
                'Keep scalp clean',
                'Use antibacterial shampoo',
                'Avoid tight hairstyles',
                'Apply warm compresses',
                'Consider prescribed medications'
            ]
        },
        'traction_alopecia': {
            name: 'Traction Alopecia',
            symptoms: ['hair_loss', 'scalp_pain', 'hair_breakage', 'scalp_tenderness', 'hair_thinning'],
            remedies: [
                'Avoid tight hairstyles',
                'Use gentle hair accessories',
                'Give hair styling breaks',
                'Gentle hair care routine',
                'Consider protective styling'
            ]
        }
    }
};

let selectedSymptoms = new Set();

// Cookie consent functions
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function acceptCookies() {
    setCookie('cookieConsent', 'accepted', 365); // Cookie lasts for 1 year
    const cookieConsent = document.getElementById('cookieConsent');
    if (cookieConsent) {
        cookieConsent.style.display = 'none';
    }
}

// Initialize the application
function init() {
    const searchInput = document.getElementById('symptomSearch');
    searchInput.addEventListener('input', handleSymptomSearch);

    // Check cookie consent
    const cookieConsent = document.getElementById('cookieConsent');
    if (cookieConsent && !getCookie('cookieConsent')) {
        cookieConsent.style.display = 'flex';
    } else if (cookieConsent) {
        cookieConsent.style.display = 'none';
    }
}

// Handle symptom search
function handleSymptomSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const symptomsListDiv = document.getElementById('symptomsList');
    
    if (searchTerm.length < 2) {
        symptomsListDiv.style.display = 'none';
        return;
    }

    const matchedSymptoms = healthDatabase.symptoms.filter(symptom => 
        symptom.name.toLowerCase().includes(searchTerm)
    );

    symptomsListDiv.innerHTML = matchedSymptoms
        .slice(0, 10)
        .map(symptom => `
            <div class="symptom-item" onclick="addSymptom('${symptom.id}', '${symptom.name}')">
                ${symptom.name}
            </div>
        `).join('');

    symptomsListDiv.style.display = 'block';
}

// Add selected symptom
function addSymptom(id, name) {
    if (!selectedSymptoms.has(id)) {
        selectedSymptoms.add(id);
        updateSelectedSymptomsList();
    }
    document.getElementById('symptomSearch').value = '';
    document.getElementById('symptomsList').style.display = 'none';
}

// Remove selected symptom
function removeSymptom(id) {
    selectedSymptoms.delete(id);
    updateSelectedSymptomsList();
}

// Update the display of selected symptoms
function updateSelectedSymptomsList() {
    const selectedSymptomsList = document.getElementById('selectedSymptomsList');
    const selectedSymptomArray = Array.from(selectedSymptoms);
    
    selectedSymptomsList.innerHTML = selectedSymptomArray
        .map(id => {
            const symptom = healthDatabase.symptoms.find(s => s.id === id);
            return `
                <span class="symptom-tag">
                    ${symptom.name}
                    <button onclick="removeSymptom('${id}')">×</button>
                </span>
            `;
        }).join('');
}

// Check symptoms and get diagnosis
function checkSymptoms() {
    if (selectedSymptoms.size === 0) {
        alert('Please select at least one symptom');
        return;
    }

    const loader = document.getElementById('loader');
    const resultDiv = document.getElementById('result');
    
    loader.style.display = 'block';
    resultDiv.style.display = 'none';

    // Simulate API delay
    setTimeout(() => {
        const results = analyzeSymptoms();
        displayResults(results);
        loader.style.display = 'none';
        resultDiv.style.display = 'block';
    }, 1000);
}

// Analyze symptoms and return possible conditions
function analyzeSymptoms() {
    const userSymptoms = Array.from(selectedSymptoms);
    const possibleConditions = [];

    for (const [conditionId, condition] of Object.entries(healthDatabase.conditions)) {
        const matchingSymptoms = condition.symptoms.filter(symptom => 
            userSymptoms.includes(symptom)
        );

        if (matchingSymptoms.length > 0) {
            const probability = matchingSymptoms.length / condition.symptoms.length;
            if (probability >= 0.3) { // Only include if at least 30% of symptoms match
                possibleConditions.push({
                    name: condition.name,
                    probability: probability,
                    matchedSymptoms: matchingSymptoms.length,
                    totalSymptoms: condition.symptoms.length,
                    remedies: condition.remedies
                });
            }
        }
    }

    return possibleConditions.sort((a, b) => b.probability - a.probability);
}

// Display diagnosis results
function displayResults(conditions) {
    const conditionsDiv = document.getElementById('conditions');
    
    if (conditions.length === 0) {
        conditionsDiv.innerHTML = '<p>No specific conditions found. Please consult a healthcare professional for accurate diagnosis.</p>';
        return;
    }

    conditionsDiv.innerHTML = conditions
        .map(condition => `
            <div class="condition-item">
                <h4>${condition.name}</h4>
                <p class="accuracy">Probability: ${Math.round(condition.probability * 100)}%</p>
                <p>Matched Symptoms: ${condition.matchedSymptoms}/${condition.totalSymptoms}</p>
                <div class="remedies">
                    <h5>Recommended Remedies:</h5>
                    <ul>
                        ${condition.remedies.map(remedy => `<li>${remedy}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
}

// Initialize the application when the page loads
window.addEventListener('load', init); 

function addCondition(condition) {
    const severityClass = getSeverityClass(condition.probability);
    const conditionCard = document.createElement('div');
    conditionCard.className = 'condition-card';
    
    conditionCard.innerHTML = `
        <h3 class="condition-name">
            <i class="fas fa-heartbeat"></i>
            ${condition.name}
        </h3>
        <span class="condition-probability">${condition.probability}% Match</span>
        <span class="condition-severity ${severityClass}">
            ${getSeverityText(condition.probability)}
        </span>
        <p class="condition-description">${condition.description}</p>
        <div class="condition-symptoms">
            <h4><i class="fas fa-list"></i> Common Symptoms</h4>
            <div class="symptoms-list">
                ${condition.symptoms.map(symptom => `
                    <span class="symptom-tag">${symptom}</span>
                `).join('')}
            </div>
        </div>
        <div class="remedies-section">
            <h4 class="remedies-title">
                <i class="fas fa-hand-holding-medical"></i>
                Recommended Actions
            </h4>
            <div class="remedies-list">
                ${condition.remedies.map(remedy => `
                    <div class="remedy-item">
                        <i class="fas fa-check-circle"></i>
                        <span>${remedy}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('conditions').appendChild(conditionCard);
}

function getSeverityClass(probability) {
    if (probability >= 75) return 'severity-high';
    if (probability >= 50) return 'severity-medium';
    return 'severity-low';
}

function getSeverityText(probability) {
    if (probability >= 75) return 'High Priority';
    if (probability >= 50) return 'Medium Priority';
    return 'Low Priority';
}

// Example condition data structure
const exampleCondition = {
    name: "Example Condition",
    probability: 85,
    description: "This is an example description of the condition that explains what it is and its general characteristics.",
    symptoms: ["Symptom 1", "Symptom 2", "Symptom 3"],
    remedies: [
        "Schedule an appointment with your healthcare provider",
        "Monitor your symptoms and keep a log",
        "Get adequate rest and stay hydrated",
        "Take prescribed medications as directed"
    ]
};