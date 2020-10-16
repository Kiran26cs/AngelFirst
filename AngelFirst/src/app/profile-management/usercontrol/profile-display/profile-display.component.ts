import { Component, OnInit, Input } from '@angular/core';
import { profileDetail} from '../../Model/profile'
@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit {

    private profileInfo: profileDetail
    private profiles: Array<profileDetail> = []
    @Input() inpprofileItem: profileDetail
  constructor() { }

  ngOnInit() {
      
  }

  populateList() {
      this.profiles = [{ Address: 'Chennai', Name: 'Kiran', profileID: 1 },
          { Address: 'Chennai', Name: 'Anu', profileID: 2 },
          { Address: 'Coimbatore', Name: 'Raju', profileID: 3 },
          { Address: 'Coimbatore', Name: 'Kunj', profileID: 4 },
          { Address: 'Canada', Name: 'Arun', profileID: 5 },
          { Address: 'NY', Name: 'Rajee', profileID: 6 },
      ]
  }

  EditProfile(id) {
      this.populateList();
      this.profileInfo = this.profiles.filter(x => x.profileID == id)[0]
  }

}
