import './Pricing.css'
import { Icon } from '@iconify/react';

function Pricing() {
  return (
    <main className='pricingContainer'>
        <div className='aboutHeading'>
            <h2>PRICING</h2>
            <span> <small></small> </span>
        </div>
        <p className='servicesText'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <div className="packages">
            <div className="package">
                <h4>Free Plan</h4>
                <span className='price'> <sup>$</sup>0</span>
                <span className='timeSpan'>per month</span>
                <ul>
                    <li><Icon icon="teenyicons:tick-small-outline"  color="#28a745"  width="24"/> Quam adipiscing vitae proin</li>
                    <li><Icon icon="teenyicons:tick-small-outline"  color="#28a745"  width="24"/> Nec feugiat nisl pretium</li>
                    <li><Icon icon="teenyicons:tick-small-outline"  color="#28a745"  width="24"/> Nulla at volutpat diam uteera</li>
                    <li className='lineThrough'><Icon icon="bi:x"   width="24"/> Pharetra massa massa ultricies</li>
                    <li className='lineThrough'><Icon icon="bi:x"   width="24"/> Massa ultricies mi quis hendrerit</li>
                </ul>
                <button className='btnOutline btnOutline2'>Get Started</button>
            </div>
            <div className="package activePackage">
                <h4>Business Plan</h4>
                <span className='price'> <sup>$</sup>29</span>
                <span className='timeSpan'>per month</span>
                <ul>
                    <li><Icon icon="teenyicons:tick-small-outline"  color="#28a745"  width="24"/> Quam adipiscing vitae proin</li>
                    <li><Icon icon="teenyicons:tick-small-outline"  color="#28a745"  width="24"/> Nec feugiat nisl pretium</li>
                    <li><Icon icon="teenyicons:tick-small-outline"  color="#28a745"  width="24"/> Nulla at volutpat diam uteera</li>
                    <li><Icon icon="teenyicons:tick-small-outline"      color="#28a745" width="24"/> Pharetra massa massa ultricies</li>
                    <li><Icon icon="teenyicons:tick-small-outline"     color="#28a745" width="24"/> Massa ultricies mi quis hendrerit</li>
                </ul>
                <button className='btnOutline btnOutline2'>Get Started</button>
            </div>
            <div className="package">
                <h4>Developer Plan</h4>
                <span className='price'> <sup>$</sup>49</span>
                <span className='timeSpan'>per month</span>
                <ul>
                    <li><Icon icon="teenyicons:tick-small-outline"  color="#28a745"  width="24"/> Quam adipiscing vitae proin</li>
                    <li><Icon icon="teenyicons:tick-small-outline"  color="#28a745"  width="24"/> Nec feugiat nisl pretium</li>
                    <li><Icon icon="teenyicons:tick-small-outline"  color="#28a745"  width="24"/> Nulla at volutpat diam uteera</li>
                    <li><Icon icon="teenyicons:tick-small-outline"   color="#28a745" width="24"/> Pharetra massa massa ultricies</li>
                    <li><Icon icon="teenyicons:tick-small-outline"   color="#28a745" width="24"/> Massa ultricies mi quis hendrerit</li>
                </ul>
                <button className='btnOutline btnOutline2'>Get Started</button>
            </div>
        </div>
    </main>
  )
}

export default Pricing